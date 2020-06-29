import { TOGGLE_CANDIDATE } from '../actions/actionTypes';

const initialState = {
  visible: 'HillaryClinton',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CANDIDATE:
      return {
        visible: action.payload,
      };
    default:
      return state;
  }
};
