const mongoose = require('mongoose');

const { Schema } = mongoose;

const saleSchema = new Schema({
  product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantitySold: { type: Number, required: true },
  date: { type: Date },
  status: { type: Boolean, default: true },
  isActive: { type: Boolean, default: true },
  isDeleted: { type: Boolean, default: false },
  createDate: { type: Date, default: Date.now },
  deleteDate: { type: Date }
});

const Sale = mongoose.model('Sale', saleSchema);

module.exports = Sale;
