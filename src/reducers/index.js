import { combineReducers } from 'redux';
import products from './products';
import editingProduct from './editingProduct';

const myReducer = combineReducers({
    products,
    editingProduct
});

export default myReducer;