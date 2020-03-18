const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
    name: String,
    species: String,
    birthday: String,
    image: String,
    owner: String,
    createdAt: {
        type: Date, 
        default: Date.now
    }
});

const User = mongoose.model('Pet', petSchema);

module.exports = Pet;