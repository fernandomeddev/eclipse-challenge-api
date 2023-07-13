const express = require('express');
const router = express.Router();

const ShowOwnerController = require('../controllers/ShowOwnersController');

router.get('/owners',
    ShowOwnerController
)

module.exports = app => app.use('/offers-portal', router);
