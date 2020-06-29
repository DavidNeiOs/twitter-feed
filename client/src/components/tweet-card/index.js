import React from 'react';
import { isNil } from 'lodash';
import {
  IoIosSwap,
  IoIosQuote,
  IoLogoTwitter,
  IoIosHeart,
} from 'react-icons/io';
import './tweet-card.css';

import { RETWEET, QUOTE } from '../../constants/twitter-actions';

export const TweetCard = (props) => {
  const info = getTweetInfo(props.retweetStatus, props.quoteStatus);
  let Icon;
  switch (info.action) {
    case RETWEET:
      Icon = IoIosSwap;
      break;
    case QUOTE:
      Icon = IoIosQuote;
      break;
    default:
      Icon = IoLogoTwitter;
      break;
  }
  return (
    <div className='tweet_card'>
      <div className='tweet_card_header'>
        <div className='tweet_card_header_info'>
          <Icon /> <span>{info.description}</span>
        </div>
        <a href={props.url} className='tweet_card_header_button'>
          See tweet
        </a>
      </div>
      <p className='tweet_text'>
        {props.text ||
          `[This tweet contains only media (a video or an image). Click See tweet to access the media]`}
      </p>
      <div className='tweet_extra_info'>
        <div className='tweet_retweets'>
          <IoIosSwap color='green' />
          {props.retweets}
        </div>
        <div className='tweet_favorites'>
          <IoIosHeart color='red' />
          {props.favorites ? props.favorites : info.favorites}
        </div>
      </div>
    </div>
  );
};

/**
 *
 * @param {Object} retweetStatus object containing extra data if tweet is retweet
 * @param {Object} quoteStatus object containing extra data if tweet is quoting
 */
function getTweetInfo(retweetStatus, quoteStatus) {
  if (!isNil(retweetStatus)) {
    // if tweet is a retweet
    return {
      favorites: retweetStatus.favorite_count,
      description: `Retweet from @${retweetStatus.user.screen_name}`,
      action: RETWEET,
    };
  } else if (!isNil(quoteStatus)) {
    // if tweet is quoting someone
    return {
      favorites: 0,
      description: `Quoting @${quoteStatus.user.screen_name}`,
      action: QUOTE,
    };
  } else {
    // normal tweet
    return {
      favorites: 0,
      description: '',
      action: '',
    };
  }
}
