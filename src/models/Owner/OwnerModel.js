const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const owner = new Schema({
    name: {
        type: String,
        required: true,
    },
    billets: {
        type: Number,
        required: false,
        default: 5,
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

const Owner = mongoose.model('Owner', owner);
module.exports = Owner;