import { takeEvery, put, call, fork, all } from 'redux-saga/effects';

import { FETCH_CANDIDATE_DATA } from '../actions/actionTypes';
import { addCandidateData } from '../actions';
import { fetchCandidate } from '../api';

function* handleFetchCandidate(action) {
  try {
    const data = yield call(fetchCandidate, action.candidate);
    yield put(addCandidateData(data));
  } catch (e) {
    console.log(e);
  }
}

function* fetchWatcher() {
  yield takeEvery(FETCH_CANDIDATE_DATA, handleFetchCandidate);
}

export default function* root() {
  yield all([fork(fetchWatcher)]);
}
