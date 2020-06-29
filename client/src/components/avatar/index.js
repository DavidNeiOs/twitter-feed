import React from 'react';
import './avatar.css';

export const Avatar = ({ url }) => {
  return (
    <div className='avatar_container'>
      <img src={url} alt='profile picture' className='image' />
    </div>
  );
};
