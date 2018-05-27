const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

/* save new something
const Todo = mongoose.model('todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

/* const newTodo = new Todo({
  text: 'Cook dinner'
});

newTodo.save().then( (doc) => {
  console.log('Saved todo ', doc);
}, (err) => {
  console.log('Unable to save todo.');
});


const otherTodo = new Todo({
  text: 123, // this 123 is cached in string by mongoose, hence document passes validation, and results in unexpected error.
  completed: 0 // similarly this is also coerced to false to pass the validation, and results in unexpected error
});

otherTodo.save().then( (doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (err) => {
  console.log('Unable to save ', err);
} ); */

// User
const User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

const user = new User({
  email: 'hello_navneet@hotmail.com   '
});

user.save().then( (doc) => {
  console.log('User saved ', doc);
}, (e) => {
  console.log('Unable to save ', e);
});