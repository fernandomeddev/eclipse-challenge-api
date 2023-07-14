const OffersModel = require('../models/Offer/OffersModel');

class ShowOfferService {
    async handle(queryParams) {
        const { pageNumber, pageSize } = queryParams;

        const offers = await OffersModel.find().sort({ createdAt: -1 })
        .skip(pageNumber * pageSize)
        .limit(pageSize);

        if (!offers) return { responseError: true, errorMessage: 'There are no offers'}

        return { responseError: false, data: offers };
    }
}
module.exports = ShowOfferService;