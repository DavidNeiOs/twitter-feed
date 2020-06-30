import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import { fetchCandidateData } from '../actions/index';
import { getTweetDate } from '../utils/time';
import { UserInfo } from './user-info';
import { TweetCard } from './tweet-card';

const TweetView = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCandidateData(props.handle));
  }, []);

  return (
    <div
      className={
        props.currentVisible === props.handle ? 'visible' : 'not_visible'
      }
    >
      {!props.candidate ? (
        <div style={{ textAlign: 'center' }}>Loading</div>
      ) : (
        <div className='tweet_view'>
          <UserInfo user={props.candidate.user} />
          <div className='tweets_container'>
            {props.candidate.tweets.map((tweet) => {
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

function mapStateToProps(state, ownProps) {
  return {
    currentVisible: state.visible.visible,
    candidate: state.users.byHandle[ownProps.handle],
  };
}

export default connect(mapStateToProps, { fetchCandidateData })(TweetView);
