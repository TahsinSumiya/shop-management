const express = require('express');
const router = express.Router();
const productController = require('../controllers/Product');

router.post('/products', productController.createProduct);
router.get('/getproducts', productController.getProduct);
router.get('/getproducts/:id', productController.getProductbyId);
router.put('/updateproducts/:id', productController.updateProductbyId);
router.delete('/deleteproducts/:id', productController.deleteProduct);
module.exports = router;