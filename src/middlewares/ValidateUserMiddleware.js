const OwnerModel = require('../models/Owner/OwnerModel');
const OfferModel = require('../models/Offer/OffersModel');

module.exports = async (request, response, next) => {
    const {  owner_id: ownerId} = request.params;
    const { offer_id: offerId } = request.body;

    if (!offerId) return response.status(401).json({ responseError: true, errorMessage: 'Offer id is required' });

    const currentUser = await OwnerModel.findById(ownerId);
    if (!currentUser) return response.status(401).json({ responseError: true, errorMessage: 'User not valid'});

    const currentOffer = await OfferModel.findById(offerId);
    if (!currentOffer) return response.status(401).json({ responseError: true, errorMessage: 'Offer not exists'});

    const currentOfferPopulate = await OfferModel.findById(offerId).populate({ path: 'ownerId'});

    if ( currentUser.id !== currentOfferPopulate.ownerId.id) return response.status(401).json({ responseError: true, errorMessage: 'This wallet does not valid' });
    
    return next();
};
