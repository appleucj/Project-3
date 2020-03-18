const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: String,
    firstName: String,
    lastName: String,
    phoneNumber: String,
    address: String,
    city: String,
    State: String,
    zipCode: String,
    password: String,
    createdAt: {
        type: Date, 
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;