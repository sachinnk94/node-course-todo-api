//const MongoClient = require('mongodb').MongoClient;
var {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to the MongoDB server');

  const db = client.db('TodoApp');
//deleteMany, deleteOne, findOneAndDelete
  // db.collection('Todos').deleteMany({text: "eat lunch"}).then((res) => {
  //   console.log(JSON.stringify(res, undefined, 2));
  // }, (error) => {
  //   if(error)
  //     console.log("unable to fetch Todo documents", error);
  // });

  // db.collection('Todos').deleteOne({text: "eat lunch"}).then((res) => {
  //   console.log(JSON.stringify(res, undefined, 2));
  // }, (error) => {
  //   if(error)
  //     console.log("unable to fetch Todo documents", error);
  // });

  // db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
  //   //console.log(JSON.stringify(res, undefined, 2));
  //   console.log(res);
  // }, (error) => {
  //   if(error)
  //     console.log("unable to fetch Todo documents", error);
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID("5c6a7cbe6a595a1e84d92441")}).then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (error) => {
    if(error)
      console.log("unable to fetch Todo documents", error);
  });

  // db.collection('Users').deleteMany({name: "andrew"}).then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (error) => {
  //   if(error)
  //     console.log("unable to fetch Todo documents", error);
  // });

  //client.close();
});
