const WalletModel = require('../models/Wallet/WalletModel');

class ShowWalletsService {
    async handle() {
        const offers = await WalletModel.find({});

        if (!offers) return { responseError: true, errorMessage: 'There are no wallets'}

        return { responseError: false, data: offers };
    }
}
module.exports = ShowWalletsService;