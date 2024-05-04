const express = require('express');
const ConnetDB = require('./db/ConnectDB')
require("dotenv").config()
const cors = require("cors");
const app = express();
const productRoutes = require('./routes/ProductRouter');
const stockRoutes = require('./routes/StockRoutes');
const receiptRoutes = require('./routes/ReceiptRoutes');
const salesRoutes = require('./routes/SalesRouter');
app.use(express.json());
app.use(cors());
ConnetDB();
app.use('/api', productRoutes);
app.use('/stocks', stockRoutes);
app.use('/receipts', receiptRoutes);
app.use('/sales', salesRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));