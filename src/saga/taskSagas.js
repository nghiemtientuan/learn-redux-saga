import { call, put, takeLatest } from 'redux-saga/effects';
import {callApi} from '../utils/apiCaller';
import * as Types from './../constants/ActionTypes';
import {fetchTasksRequestSuccess} from '../actions';
import {HTTP_STATUS} from '../constants/httpStatus';

// Sagas
export function* taskSagas() {
  yield takeLatest(Types.FETCH_TASKS, onFetchTasks);
}

function* onFetchTasks() {
  const result = yield call(getTasksApi);

  if (result.status === HTTP_STATUS.http_200) {
    const { data } = result;
    yield put(fetchTasksRequestSuccess(data));

    return;
  }

  console.error('[ERROR] onFetchTasks error')
}

// Call APIs
const getTasksApi = () => {
  return callApi('tasks')
    .then(response => response)
    .catch(error => error.response);
}
