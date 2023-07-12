// const OfferModel = require('../models/Offer/OffersModel');
const OffersModel = require('../models/Offer/OffersModel');
const OwnerModel = require('../models/Owner/OwnerModel');
const WalletModel = require('../models/Wallet/WalletModel');

class CreateOfferService {
    async handle( ownerId, body ) {
        if (!body.unit_price) return { responseError: true, errorMessage: 'unit price is required' };
        if (!body.amount) return { responseError: true, errorMessage: 'amount is required'};

        const currentUser = await OwnerModel.findById(ownerId);
        
        const currentWallet = await WalletModel.findById(body.wallet).populate({path:'owner'});
       
        if ( body.amount > currentWallet.amount || currentWallet.owner.billets === 0 ) return { responseError: true, errorMessage: 'The wallet amount or billets are insuficients' }
        
        const operationAmountResult = currentWallet.amount - body.amount;
        const operationBilletResult = currentUser.billets - 1;

        currentWallet.amount = operationAmountResult;
        currentWallet.save();

        currentUser.billets = operationBilletResult;
        currentUser.save();

        const newOffer = {
            ownerId,
            wallet: body.wallet,
            unitPrice: body.unit_price,
            amount: body.amount,
            createdAt: Date.now()
        }

        const createdOffer = await OffersModel.create(newOffer);
        
        return { responseError: false, data: { userName: currentUser.name, offersAvailable: currentUser.billets, walletAmount: currentWallet.amount, currentOffer: createdOffer }};
    }
}

module.exports = CreateOfferService;