const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  var db = client.db('TodoApp');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5b0aa1f8003197a8a7cf08ab')
  }, {
    // $set is an update operator
    // we can't update without operators
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then( (result) => {
    console.log(result);
  });

  //db.close();
});