const OwnerModel = require('../models/Owner/OwnerModel');
const WalletModel = require('../models/Wallet/WalletModel');

module.exports = async (request, response, next) => {
    const {  owner_id:ownerId} = request.params;
    const body = request.body;

    if (!body.wallet) return response.status(401).json({ responseError: true, errorMessage: 'wallet Id is require' });

    const currentUser = await OwnerModel.findById(ownerId);
    if (!currentUser) return response.status(401).json({ responseError: true, errorMessage: 'User not valid'});

    const currentWallet = await WalletModel.findById(body.wallet).populate({path:'owner'});
    if(!currentWallet) return response.status(401).json({ responseError: true, errorMessage: 'wallet do not exists'});

    if ( currentUser.id !== currentWallet.owner.id) return response.status(401).json({ responseError: true, errorMessage: 'This wallet does not valid' });
    
    return next();
};