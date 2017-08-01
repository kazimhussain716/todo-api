const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');
const {ObjectID} = require('mongodb');
var id = '59806b7999b7d1500d89d1d7';

var userId = '59801c91505720341d423edb';
// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos :', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo :', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id:', todo);
// }).catch((e) => console.log(e));

User.findById(userId).then((user) => {
    if(!user) {
            return console.log('Id not found');
    }
    console.log('User By Id :',user);
},(e) => console.log('Error ',e))
.catch((e) => console.log(e));