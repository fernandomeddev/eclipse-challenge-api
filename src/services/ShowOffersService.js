const OffersModel = require('../models/Offer/OffersModel');

class ShowOfferService {
    async handle() {
        const offers = await OffersModel.find({});

        if (!offers) return { responseError: true, errorMessage: 'There are no offers'}

        return { responseError: false, data: offers };
    }
}
module.exports = ShowOfferService;