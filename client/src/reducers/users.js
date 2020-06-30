import { ADD_CANDIDATE_DATA } from '../actions/actionTypes';

const initialState = {
  handleNames: [],
  byHandle: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_CANDIDATE_DATA:
      const { user, tweets } = action.payload;
      return {
        ...state,
        handleNames: [...state.handleNames, user.screen_name],
        byHandle: {
          ...state.byHandle,
          [user.screen_name]: { user, tweets },
        },
      };
    default:
      return state;
  }
}
