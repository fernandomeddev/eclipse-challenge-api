// const OfferModel = require('../models/Offer/OffersModel');
const OffersModel = require('../models/Offer/OffersModel');
const WalletModel = require('../models/Wallet/WalletModel');

class RemoveOfferService {
    async handle(offerId, executedByCronJob=false) {
        const currentOffer = await OffersModel.findById(offerId).populate({path: 'wallet'});
        if (!currentOffer) return { responseError: true, errorMessage: 'Invalid Offer'};

        const walletToUpdate = await WalletModel.findById(currentOffer.wallet.id);
        if (!walletToUpdate ) return { responseError: true, errorMessage: 'wallet error' };

        if (!executedByCronJob) {
            if (currentOffer.status === 'inactive') return { responseError: true, errorMessage: 'This is already deleted' };
        };
        
        currentOffer.status = 'inactive';
        currentOffer.save();

        const amountToBackWallet = currentOffer.amount + walletToUpdate.amount;
        walletToUpdate.amount = amountToBackWallet;
        walletToUpdate.save();

        return { responseError: false, data: { currentOffer: currentOffer, executedby: executedByCronJob ? 'Cron Job' : 'Onwer' }};
    }
}

module.exports = RemoveOfferService;