import * as Types from './../constants/ActionTypes';

var initialState = [];

var findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
        if(product.id === id){
            result = index;
        }
    });
    return result;
}

var myReducer = (state = initialState, action) => {
    var index = -1;
    switch (action.type){
        case Types.ADD_PRODUCTS:
            state.push(action.product);
            return [...state];
        case Types.UPDATE_PRODUCTS:
            index = findIndex(state, action.product.id);
            if(index !== -1){
                state[index] = action.product;
            }
            return [...state];
        case Types.FETCH_PRODUCTS:
            state = action.products;
            return [...state];
        case Types.DELETE_PRODUCTS:
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