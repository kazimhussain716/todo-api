const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');
const { ObjectID } = require('mongodb');

// Todo.remove({}).then((result) => {
//      console.log(result);
// });

// findOneAndRemove()
Todo.findOneAndRemove({ _id: '5981afb816dca95d5b1469ae' }).then((todo) => {
    console.log(todo);
})
Todo.findByIdAndRemove('5981afb816dca95d5b1469ae').then((todo) => {
    console.log(todo);
})