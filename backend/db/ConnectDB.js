
const mongoose = require('mongoose');
require("dotenv").config()
const ConnectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://tahsin:SRULtpAr2VaYKxOh@cluster0.wo26rp2.mongodb.net/', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = ConnectDB;
