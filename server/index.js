const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
//Routes will go here
app.get('/api/hello', (req, res) => {
  console.log('ping');
  res.status(200).send({
    success: true,
    message: 'Hello world',
  });
});

app.listen('3000', () => {
  console.log('listening on PORT 3000!');
});
