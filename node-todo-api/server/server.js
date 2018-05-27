const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// save new something
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
});*/


const otherTodo = new Todo({
  text: ' Edit this video '
});

otherTodo.save().then( (doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (err) => {
  console.log('Unable to save ', err);
} );