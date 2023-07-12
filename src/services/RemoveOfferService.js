// const OfferModel = require('../models/Offer/OffersModel');
const OffersModel = require('../models/Offer/OffersModel');
const OwnerModel = require('../models/Owner/OwnerModel');
const WalletModel = require('../models/Wallet/WalletModel');

class CreateOfferService {
    async handle( ownerId, body ) {
        
        const currentOffer = await OffersModel.findById(body.offer).populate({path: 'wallet'});
        if (!currentOffer) return { responseError: true, errorMessage: 'Invalid Offer'};
        if (currentOffer.status == 'inactive') return { responseError: true, errorMessage: 'This is already deleted' };
        currentOffer.status = 'inactive';
        currentOffer.save();
        
        return { responseError: false, data: { currentOffer: currentOffer }};
    }
}

module.exports = CreateOfferService;