import { call, put, takeLatest } from 'redux-saga/effects';
import {callApi} from '../utils/apiCaller';
import * as Types from './../constants/ActionTypes';
import {addTaskRequestSuccess, deleteTaskRequestSuccess, fetchTasksRequestSuccess} from '../actions';
import {HTTP_STATUS} from '../constants/httpStatus';

// Sagas
export function* taskSagas() {
  yield takeLatest(Types.FETCH_TASKS, onFetchTasks);
  yield takeLatest(Types.ADD_TASK, onAddTask);
  yield takeLatest(Types.DELETE_TASK, onDeleteTask);
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

function* onAddTask(action) {
  const result = yield call(addTaskApi, action.task);

  if (result.status === HTTP_STATUS.http_200 || result.status === HTTP_STATUS.http_201) {
    const { data } = result;
    yield put(addTaskRequestSuccess(data));

    return;
  }

  console.error('[ERROR] onAddTask error')
}

function* onDeleteTask(action) {
  const result = yield call(deleteTaskApi, action.id);

  if (result.status === HTTP_STATUS.http_200 || result.status === HTTP_STATUS.http_201) {
    yield put(deleteTaskRequestSuccess(action.id));

    return;
  }

  console.error('[ERROR] onDeleteTask error')
}

// Call APIs
const getTasksApi = () => {
  return callApi('tasks')
    .then(response => response)
    .catch(error => error.response);
}

const addTaskApi = (newTask) => {
  return callApi('tasks', 'POST', newTask)
    .then(response => response)
    .catch(error => error.response);
}

const deleteTaskApi = (id) => {
  return callApi(`tasks\\${id}`, 'DELETE')
    .then(response => response)
    .catch(error => error.response);
}
