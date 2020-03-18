const mongoose = require("mongoose");

const inboxSchema = new mongoose.Schema({
    sender: String,
    receiver: String,
    subject: String,
    message: String,
    date: String,
    invitation: String,
    person: String,
    image_path: String,
    createdAt: {
        type: Date, 
        default: Date.now
    }
});

const User = mongoose.model('Inbox', inboxSchema);

module.exports = Inbox;