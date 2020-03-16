const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    name: String,
    completed: {
        type: Boolean, 
        default: false 
    },
    created: {
        type: Date, 
        default: Date.now
    }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;