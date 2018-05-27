const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  var db = client.db('TodoApp');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b0a9e2f003197a8a7cf0773')
  }, {
    // $set is an update operator
    // we can't update without operators
    $inc: {
      age: -1
    }
  }, {
    returnOriginal: false
  }).then( (result) => {
    console.log(result);
  });

  //db.close();
});