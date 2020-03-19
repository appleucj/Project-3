const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema({
    username: String,
    phoneNumber: String,
    firstName: String,
    owner: owner_id,
    createdAt: {
        type: Date, 
        default: Date.now
    }
});

const User = mongoose.model('Owner', ownerSchema);

module.exports = Owner;