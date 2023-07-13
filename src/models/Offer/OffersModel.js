const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offer = new Schema({
    ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'Owner',
        required: true,
    },
    wallet: {
        type: mongoose.Types.ObjectId,
        ref: 'Wallet',
        required: true,
    },
    unitPrice: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        require: true
    },
    status: {
        type: String,
        required: false,
        enum: ['active', 'inactive', 'deleted'],
        default: 'active',
    },
    updatedAt: {
        type: Date,
        default: Date.now,
        require: false
    },

});

const Offer = mongoose.model('Offer', offer);

module.exports = Offer;