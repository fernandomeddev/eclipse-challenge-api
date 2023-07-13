const express = require('express');
const router = express.Router();

const ValidUserMiddleware = require('../middlewares/ValidateUserMiddleware')

const ShowOffersController = require('../controllers/ShowOffersController');
const CreateOfferController = require('../controllers/CreateOfferController');
const RemoveOfferController = require('../controllers/RemoveOfferController');

router.get('/offers',
    ShowOffersController
)

router.post('/offer/:wallet_id',
    CreateOfferController
)

router.put('/delete-offer/:owner_id',
    ValidUserMiddleware,
    RemoveOfferController
)

module.exports = app => app.use('/offers-portal', router);