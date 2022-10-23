import * as Types from './../constants/ActionTypes';

let initialState = [];

let findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
        if(product.id === id){
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
        case Types.UPDATE_TASK:
            index = findIndex(state, action.product.id);
            if(index !== -1){
                state[index] = action.product;
            }

            return [...state];
        case Types.FETCH_TASKS:
            state = action.products;

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
