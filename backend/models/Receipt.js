const mongoose = require('mongoose');

const receiptSchema = new mongoose.Schema({
    receiptNumber: {
        type: String,
        unique: true,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        
    },
    status: {
        type: Boolean,
        default: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    createDate: {
        type: Date,
        default: Date.now
    },
    deleteDate: {
        type: Date,
        default: null
    },
    soldProducts: [
        {
            product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: Number,
            salePrice: Number
        }
    ]
});

const Receipt = mongoose.model('Receipt', receiptSchema);

module.exports = Receipt;
