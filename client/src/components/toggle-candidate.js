import React from 'react';
import { connect } from 'react-redux';
import { IoIosSwap } from 'react-icons/io';

import { toggleCandidate } from '../actions';

const ToggleCandidate = (props) => {
  function handleClick() {
    const candidate =
      props.currentCandidate === 'HillaryClinton'
        ? 'realDonaldTrump'
        : 'HillaryClinton';
    props.toggleCandidate(candidate);
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '8px 0',
      }}
    >
      <button
        style={{
          backgroundColor: '#3666d6',
          color: '#FFF',
          border: '2px solid gray',
          padding: '8px 12px',
          borderRadius: '4px',
          outline: 'none',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
        onClick={handleClick}
      >
        <IoIosSwap style={{ verticalAlign: 'middle' }} /> Switch View
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currentCandidate: state.visible.visible,
  };
}

export default connect(mapStateToProps, { toggleCandidate })(ToggleCandidate);
