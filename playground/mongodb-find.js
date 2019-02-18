const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to the MongoDB server');

  const db = client.db('TodoApp');

  // db.collection('Todos').find().toArray().then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (error) => {
  //   if(error)
  //     console.log("unable to fetch Todo documents", error);
  // });
  //
  // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (error) => {
  //   if(error)
  //     console.log("unable to fetch Todo documents", error);
  // });

  db.collection('Users').find({name: "andrew"}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (error) => {
    if(error)
      console.log("unable to fetch Todo documents", error);
  });
  //client.close();
});
