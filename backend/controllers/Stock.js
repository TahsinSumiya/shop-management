const Stock = require('../models/Stock');

exports.createStock = async (req,res) => {
    try {
        const stockEntry = new Stock(req.body); 
        await stockEntry.save();
        res.status(201).json(stockEntry);
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.error('Error creating stock entry:', error);
        ;
    }
};
exports.getStock = async (req,res) => {
    try {
        const stock = await Stock.find();
        res.json(stock);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getStockbyId = async (req, res) => {
    try {
        const stock = await Stock.findById(req.params.id);
        if (!stock) {
            return res.status(404).json({ message: 'Stock not found' });
        }
        res.json(stock);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateStockbyId = async (req, res) => {
    try {
        const stock = await Stock.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!stock) {
            return res.status(404).json({ message: 'Stock not found' });
        }
        res.json(stock);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteStock = async (req, res) => {
    try {
        const stock = await Stock.findByIdAndDelete(req.params.id);
        if (!stock) {
            return res.status(404).json({ message: 'Stock not found' });
        }
        res.json({ message: 'Stock deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};