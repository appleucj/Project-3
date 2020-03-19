const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    phoneNumber: String,
    address: String, 
    city: String,
    state: String,
    zipCode: String,
    createdAt: {
        type: Date, 
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;