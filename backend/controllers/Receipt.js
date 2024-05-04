const Receipt = require('../models/Receipt');


exports.createReceipt = async (req, res) => {
    try {
        const receipt = new Receipt(req.body);
        await receipt.save();
        res.status(201).json(receipt);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getReceipts = async (req, res) => {
    try {
        const receipt = await Receipt.find();
        res.json(receipt);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getReceiptsbyId = async (req, res) => {
    try {
        const receipt = await Receipt.findById(req.params.id);
        if (!receipt) {
            return res.status(404).json({ message: 'receipt not found' });
        }
        res.json(receipt);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateReceiptbyId = async (req, res) => {
    try {
        const receipt = await Receipt.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!receipt) {
            return res.status(404).json({ message: 'receipt not found' });
        }
        res.json(receipt);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.deleteReceipts = async (req, res) => {
    try {
        const receipt = await Receipt.findByIdAndDelete(req.params.id);
        if (!receipt) {
            return res.status(404).json({ message: 'receipt not found' });
        }
        res.json({ message: 'receipt deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};