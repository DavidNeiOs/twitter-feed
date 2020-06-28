const _ = require('lodash');

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
    const {
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
    }

    return {
      created_at,
      text,
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
