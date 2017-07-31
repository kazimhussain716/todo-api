// const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongodb Server');
    }
    console.log('Connected To Mongo db server');

    // delete Many

    // db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // });

    //delete One 
    // db.collection('Todos').deleteOne({ text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed:false})
    //   .then((res) => {
    //       console.log(res);
    //   });

    db.collection('Users').findOneAndDelete({_id:new ObjectID('597ede28752e8a263c75d4b6')})
             .then((res) => {
                 console.log(res);
             });
    //  db.close();
});
