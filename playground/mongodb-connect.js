const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to the MongoDB server');

  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text : 'something to do',
  //   completed : false
  // }, (err, result) => {
  //   if(err)
  //     return console.log('unable to insert todo', err);
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Insert new doc into Users with fields name,age, location

  db.collection('Users').insertOne({
    name: "sachin",
    age: 24,
    location: "bangalore"
  }, (err, result) => {
    if(err)
      return console.log('unable to connect to \"Users\" collection', err);
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  client.close();
});
