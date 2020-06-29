import { ADD_CANDIDATE_DATA, TOGGLE_CANDIDATE } from './actionTypes';

export const addCandidateData = (data) => ({
  type: ADD_CANDIDATE_DATA,
  payload: data,
});

export const toggleCandidate = (candidate) => ({
  type: TOGGLE_CANDIDATE,
  payload: candidate,
});
