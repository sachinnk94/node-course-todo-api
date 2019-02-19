//const MongoClient = require('mongodb').MongoClient;
var {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to the MongoDB server');

  const db = client.db('TodoApp');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5c6a80d36a595a1e84d9259e')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(res);
  });
//update Users document by setting the name to andrew and increment age by 1
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5c6a782330694722ff3c87bf')
  }, {
    $set: {
      name: "andrew"
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(res);
  });
  //client.close();
});
