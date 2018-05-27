const { mongoose } = require("./../server/db/mongoose");
const {Todo} = require('./../server/models/todo');

let id = '5b0ab4fea81b660778f4d71b';

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos ', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo ', todo);
});

Todo.findById(id).then((todo) => {
  console.log('Todo By Id ', todo);
});