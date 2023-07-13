// const OfferModel = require('../models/Offer/OffersModel');
const OffersModel = require('../models/Offer/OffersModel');
const OwnerModel = require('../models/Owner/OwnerModel');
const WalletModel = require('../models/Wallet/WalletModel');

class CreateOfferService {
    async handle( walletId, body ) {
        
        if (!body.unit_price) return { responseError: true, errorMessage: 'unit price is required' };
        if (!body.amount) return { responseError: true, errorMessage: 'amount is required'};

        const currentWallet = await WalletModel.findById(walletId).populate({ path: 'owner' });
        if (!currentWallet) return { responseError: true, errorMessage: 'The wallet do not exists' }

        const currentOwner = await OwnerModel.findById(currentWallet.owner.id);
        if (!currentOwner) return { responseError: true, errorMessage: 'The Owner do not exists' }
       
        if ( body.amount > currentWallet.amount || currentWallet.owner.billets === 0 ) return { responseError: true, errorMessage: 'The wallet amount or billets are insuficients' }
        
        const operationAmountResult = currentWallet.amount - body.amount;
        const operationBilletResult = currentOwner.billets - 1;

        currentWallet.amount = operationAmountResult;
        currentWallet.save();

        currentOwner.billets = operationBilletResult;
        currentOwner.save();

        const newOffer = {
            ownerId:  currentOwner.id,
            wallet: currentWallet.id,
            unitPrice: body.unit_price,
            amount: body.amount,
            createdAt: Date.now()
        }

        const createdOffer = await OffersModel.create(newOffer);
        
        return { responseError: false, data: { userName: currentOwner.name, offersAvailable: currentOwner.billets, walletAmount: currentWallet.amount, currentOffer: createdOffer }};
    }
}

module.exports = CreateOfferService;