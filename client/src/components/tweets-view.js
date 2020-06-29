import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { addCandidateData } from '../actions/index';
import { getTweetDate } from '../utils/time';
import { UserInfo } from './user-info';
import { TweetCard } from './tweet-card';

const TweetView = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/tweets/${props.handle}`)
      .then((result) => result.json())
      .then((res) => {
        setResponse(res);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (response) {
      setIsLoading(false);
    }
  }, [response]);

  return (
    <div
      className={
        props.currentCandidate === props.handle ? 'visible' : 'not_visible'
      }
    >
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div className='tweet_view'>
          <UserInfo user={response.data.user} />
          <div className='tweets_container'>
            {response.data.tweets.map((tweet) => {
              const date = getTweetDate(new Date(tweet.created_at));
              return (
                <TweetCard
                  key={tweet.id}
                  text={tweet.text}
                  url={tweet.url}
                  date={date}
                  retweets={tweet.retweet_count}
                  favorites={tweet.favorite_count}
                  retweetStatus={tweet.retweeted_status}
                  quoteStatus={tweet.quoted_status}
                  isQuoting={tweet.is_quote_status}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currentCandidate: state.visible.visible,
  };
}

export default connect(mapStateToProps, { addCandidateData })(TweetView);
