const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name cannot be blank'
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.Now
    }
});

// Compile schema into a model
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;