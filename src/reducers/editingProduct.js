import * as Types from './../constants/ActionTypes';

var initialState = {
    name: '',
    price: '',
    description: '',
    status: false
};

var myReducer = (state = initialState, action) => {
    switch (action.type){
        case Types.GET_PRODUCT_EDITING:
            state = action.product;
            return state;
        default:
            return state;
    }
}

export default myReducer;