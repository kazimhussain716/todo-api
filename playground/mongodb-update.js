// const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongodb Server');
    }
    console.log('Connected To Mongo db server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("597ee2a2ed3dfc01f167d714")
    // },
    //     {
    //         $set: {
    //             completed: true
    //         }
    //     },
    //     {
    //         returnOriginal: false
    //     }).then((res) => {
    //         console.log(res);
    //     });

    db.collection('Users').update({
        _id : new ObjectID('597ee05bc93a1f1ba4712dda')
    },
    {
        $inc : {
            age : +1
        },
        $set : {
            name : "Kazim Ali"
        }
    },
    {
        returnOriginal : false
    }
).then((res) => {
    console.log(res);
})
    //  db.close();
});
