const mongoose = require('mongoose');

// Define the stock entry schema
const stockEntrySchema = new mongoose.Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product', 
    required: true
  },
  stockQuantity: {
    type: Number,
    required: true
  },
  status: {
    type: Boolean,
    required: true
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
  }
});



const Stock = mongoose.model('Stock', stockEntrySchema);

module.exports = Stock;