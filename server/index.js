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

//Routes will go here
app.get('/api/tweets/:handle', (req, res) => {
  const { handle } = req.params;

  T.get('statuses/user_timeline', { screen_name: handle, count: 10 }, function (
    err,
    data,
    response
  ) {
    if (err) {
      console.log(err);
      res.status(500).send({ success: false });
      return;
    }
    // do something with data here
    res
      .status(200)
      .send({ success: true, data: twitterUtils.filterData(data) });
  });
});

app.listen('3000', () => {
  console.log('listening on PORT 3000!');
});
