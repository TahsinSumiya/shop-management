const express = require('express');
const router = express.Router();
const receiptController = require('../controllers/Receipt');

router.post('/addreceipts', receiptController.createReceipt);

router.get('/getreceipts', receiptController.getReceipts);

router.get('/getreceiptsbyId/:id', receiptController.getReceiptsbyId);

router.put('/updatereceiptsbyId/:id', receiptController.updateReceiptbyId);

router.delete('/deletereceiptsbyId/:id', receiptController.deleteReceipts);
module.exports = router;