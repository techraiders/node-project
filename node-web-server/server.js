const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  //response.send('<h1>Hello Express!</h1>');
  response.send({
    name: 'Navneet',
    likes: [
      'Biking',
      'Cities'
    ]
  });
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

// bad - send back JSON with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});