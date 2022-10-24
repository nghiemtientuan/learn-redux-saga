import * as Types from './../constants/ActionTypes';

export const fetchTasksRequest = () => {
    return {
        type: Types.FETCH_TASKS
    };
}

export const fetchTasksRequestSuccess = (tasks) => {
    return {
        type: Types.FETCH_TASKS_SUCCESS,
        tasks
    }
}
