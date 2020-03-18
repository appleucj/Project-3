const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
    username: String,
    phoneNumber: String,
    firstName: String,
    owner: String,
    createdAt: {
        type: Date, 
        default: Date.now
    }
});

const User = mongoose.model('Activity', activitySchema);

module.exports = Activity;