import { ADD_CANDIDATE_DATA } from './actionTypes';

export const addCandidateData = (data) => ({
  type: ADD_CANDIDATE_DATA,
  payload: data,
});
