const express = require('express');

const app = express();

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

app.listen(3000);