const Sales = require('../models/Sales');

exports.createSales = async (req, res) => {
    try {
        const sales = new Sales(req.body);
        await sales.save();
        res.status(201).json(sales);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getSales = async (req, res) => {
    try {
        const sales = await Sales.find();
        res.json(sales);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getSalessbyId = async (req, res) => {
    try {
        const sales = await Sales.findById(req.params.id);
        if (!sales) {
            return res.status(404).json({ message: 'receipt not found' });
        }
        res.json(sales);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateSalesbyId = async (req, res) => {
    try {
        const sales = await Sales.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!sales) {
            return res.status(404).json({ message: 'receipt not found' });
        }
        res.json(sales);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.deleteSales = async (req, res) => {
    try {
        const sales = await Sales.findByIdAndDelete(req.params.id);
        if (!sales) {
            return res.status(404).json({ message: 'receipt not found' });
        }
        res.json({ message: 'receipt deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};