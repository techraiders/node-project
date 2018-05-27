const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  var db = client.db('TodoApp');

  // deleteMany
  db.collection('Todos').deleteMany({
    text: 'Eat lunch'
  }).then( (result) => {
    console.log(result);
  });

  // deleteOne

  // findOneAndDelete

  //db.close();
});