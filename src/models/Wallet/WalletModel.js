const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wallet = new Schema({
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'Owner',
        required: true,
    },
    balance: {
        type: String,
        default: '0',
        required: false,
    },
    amount: {
        type: Number,
        required: false,
        default: 0,
    },
    status: {
        type: String,
        required: false,
        enum: ['active', 'inactive', 'deleted'],
        default: 'active',
    },
    createdAt: {
        type: Date,
        default: Date.now,
        require: false
    },
    updatedAt: {
        type: Date,
        require: false
    },

});

const Wallet = mongoose.model('Wallet', wallet);

module.exports = Wallet;