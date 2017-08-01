var mongoose = require('mongoose');

var Prmoise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

var newTodo = new Todo({
    text: 'Feed cows',
    completed : true
});

newTodo.save().then((doc) => {
    console.log('Saved Todo', doc);
}, (e) => {
    console.log('Unable to save Todo');
})