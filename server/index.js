const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const Twit = require('twit');

const twitterConstants = require('./constants');
const twitterUtils = require('./utils/twitter');

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());

var T = new Twit({
  consumer_key: twitterConstants.apiKey,
  consumer_secret: twitterConstants.apiSecretKey,
  access_token: twitterConstants.accessToken,
  access_token_secret: twitterConstants.accessTokenSecret,
});

T.get(
  'statuses/user_timeline',
  { screen_name: 'HillaryClinton', count: 10 },
  function (err, data, response) {
    if (err) {
      console.log(err);
      return;
    }
    // do something with data here
  }
);

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
