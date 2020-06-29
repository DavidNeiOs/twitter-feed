const _ = require('lodash');
const TWITTER_PREFIX = 'https://twitter.com/';
// regex from regexPal, forced to read http or https since there might be urls inside the tweet but they dont have the prefix
const urlRegex = /(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/m;

/**
 * The twitter text always ends with an url, this function takes the url and deletes not needed information as well as getting the url from the tweet
 * @param {String} text tweet string that ends with a url that directs to twitter tweet
 */
function cleanTextString(text) {
  let url = text.match(urlRegex);
  // we get an array but there should only be one link either to the tweet or what's linked on the tweet, url can be null
  if (url) url = url[0];
  const finalText = text.replace(urlRegex, '');
  return {
    finalText,
    url,
  };
}

/**
 *
 * @param {Array} data Array containing the latest tweets of an user
 * @returns {Object} an object that contains an user information and latest tweets info
 * @returns {Object} object.user user info
 * @returns {Array} object.tweets latest tweest with info that we need
 */
function filterData(data) {
  // we just need to return one user object instead of one for every tweet (default)
  let user = {};
  const tweetData = data.map((tweet) => {
    let {
      created_at,
      text,
      id,
      entities,
      is_quote_status,
      quoted_status,
      retweet_count,
      favorite_count,
      retweeted_status,
    } = tweet;
    if (_.isEmpty(user)) {
      user = tweet.user;
      // get a bigger image from twitter
      user.profile_image_url = user.profile_image_url.replace(
        'normal',
        '400x400'
      );
    }

    if (retweeted_status !== undefined) {
      // if this is a retweet use the text inside the retweet_status object
      text = retweeted_status.text;
    }

    let { finalText, url } = cleanTextString(text);

    // if there's no url, send them to user profile
    if (!url) url = TWITTER_PREFIX + user.screen_name;

    return {
      created_at,
      text: finalText,
      url,
      id,
      entities,
      is_quote_status,
      quoted_status,
      retweeted_status,
      retweet_count,
      favorite_count,
    };
  });

  return {
    user,
    tweets: tweetData,
  };
}

module.exports.filterData = filterData;
