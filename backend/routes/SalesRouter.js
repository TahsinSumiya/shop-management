const express = require('express');
const router = express.Router();
const SalesController = require('../controllers/Sales');


router.post('/addsales', SalesController.createSales);

router.get('/getsales', SalesController.getSales);

router.get('/getsalesbyId/:id', SalesController.getSalessbyId);

router.put('/updatesalesbyId/:id', SalesController.updateSalesbyId);

router.delete('/deletesalesbyId/:id', SalesController.deleteSales);

module.exports = router;