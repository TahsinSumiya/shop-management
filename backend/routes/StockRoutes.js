const express = require('express');
const router = express.Router();
const StockController = require('../controllers/Stock');

router.post('/addstock', StockController.createStock);
router.get('/getstock', StockController.getStock);
router.get('/getstockbyId/:id', StockController.getStockbyId);
router.put('/updatestockbyId/:id', StockController.updateStockbyId);
router.delete('/deletestock/:id', StockController.deleteStock);
module.exports = router;