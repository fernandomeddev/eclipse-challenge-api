const OwnerModel = require('../models/Owner/OwnerModel');

class ShowOwnerService {
    async handle() {
        const offers = await OwnerModel.find({});

        if (!offers) return { responseError: true, errorMessage: 'There are no offers owners'}

        return { responseError: false, data: offers };
    }
}
module.exports = ShowOwnerService;