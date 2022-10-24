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
    };
}

export const addTaskRequest = (task) => {
    return {
        type: Types.ADD_TASK,
        task
    };
}

export const addTaskRequestSuccess = (task) => {
    return {
        type: Types.ADD_TASK_SUCCESS,
        task
    };
}

export const deleteTaskRequest = (id) => {
    return {
        type: Types.DELETE_TASK,
        id
    };
}

export const deleteTaskRequestSuccess = (id) => {
    return {
        type: Types.DELETE_TASK_SUCCESS,
        id
    };
}
