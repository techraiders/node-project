const express = require('express'),
      bodyParser = require('body-parser'),{mongoose} = require('./db/mongoose'),
      {Todo} = require('./models/todo'),
      {User} = require('./models/user'),
      app = express();

app.listen(3000, () => {
  console.log('Started on port 3000');
});

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  
  let toDo = new Todo({
    text: req.body.text
  });

  toDo.save().then( (doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});

app.get('/todos', (req, res) => {
  Todo.find({}).then((todos) => {
    res.send({data: todos});
  }, (err) => {
    res.status(400).send(err);
  });
});