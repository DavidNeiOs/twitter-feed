import React from 'react';
import { IoIosPin } from 'react-icons/io';
import './user-info.css';

import { Avatar } from '../avatar';
import { getJoinedDate } from '../../utils/time';

export const UserInfo = ({ user }) => {
  const {
    created_at,
    description,
    location,
    name,
    screen_name,
    followers_count,
    profile_image_url,
  } = user;

  const date = new Date(created_at);

  return (
    <div className='user_data_container'>
      <Avatar url={profile_image_url} />
      <div className='user_data'>
        <h3 className='user_data_name'>{name}</h3>
        <p className='user_data_handle'>@{screen_name}</p>
        <p className='user_data_description'>{description}</p>
        <p className='user_data_location'>
          <IoIosPin /> {location}
        </p>
        <p className='user_data_joined'>
          Joined twitter: {getJoinedDate(date)}
        </p>
        <p className='user_data_followers'>Followers: {followers_count}</p>
      </div>
    </div>
  );
};
