import {
  ADD_CANDIDATE_DATA,
  TOGGLE_CANDIDATE,
  FETCH_CANDIDATE_DATA,
} from './actionTypes';

export const fetchCandidateData = (candidate) => ({
  type: FETCH_CANDIDATE_DATA,
  candidate,
});

export const addCandidateData = (data) => ({
  type: ADD_CANDIDATE_DATA,
  payload: data,
});

export const toggleCandidate = (candidate) => ({
  type: TOGGLE_CANDIDATE,
  payload: candidate,
});
