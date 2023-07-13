const express = require('express');
const router = express.Router();

const ShowWalletController = require('../controllers/ShowWalletsController');

router.get('/wallets',
    ShowWalletController
)

module.exports = app => app.use('/offers-portal', router);