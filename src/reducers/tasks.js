import * as Types from './../constants/ActionTypes';

let initialState = [];
// {
//     id: 1
//     name: "abc"
// }

let findIndex = (products, id) => {
    let result = -1;
    products.forEach((product, index) => {
        if (product.id === id) {
            result = index;
        }
    });

    return result;
}

let myReducer = (state = initialState, action) => {
    let index = -1;
    switch (action.type){
        case Types.ADD_TASK:
            state.push(action.product);

            return [...state];
        case Types.FETCH_TASKS_SUCCESS:
            state = action.tasks;

            return [...state];
        case Types.DELETE_TASK:
            index = findIndex(state, action.id);
            if(index !== -1){
                state.splice(index, 1);
            }

            return [...state];
        default:
            return [...state];
    }
}

export default myReducer;
