import React from 'react';
import { connect } from 'react-redux';
import { addCandidateData } from '../actions/index';

const TweetView = (props) => {
  return (
    <div>
      <p>hillary Clinton tweets</p>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

export default connect(mapStateToProps, { addCandidateData })(TweetView);
