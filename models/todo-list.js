const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    }
});

const Todo = mongoose.model('todo-list', todoSchema);

module.exports = Todo;