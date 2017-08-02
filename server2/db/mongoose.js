var mongoose = require('mongoose');

mongoose.Prmoise = global.Promise;
var MONGODB_URI = 'mongodb://<todoapp>:<Kazim123456789>@ds129043.mlab.com:29043/todoapp2';
mongoose.connect(MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose
};