import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const fetchTasksRequest = () => {
    return (dispatch) => {
        return callApi('tasks', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data));
		});
    }
}

export const actDeleteProductsRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProducts(id));
        });
    }
}

export const actDeleteProducts = (id) => {
    return {
        type: Types.DELETE_PRODUCTS,
        id
    }
}

export const getProductEditingRequest = (id) => {
    return (dispatch) => {
        return callApi('products/' + id, 'GET', null).then(res => {
            dispatch(getProductEditing(res.data));
        });
    }
}

export const getProductEditing = (product) => {
    return {
        type: Types.GET_PRODUCT_EDITING,
        product
    }
}

export const addProductRequest = (product) => {
    return (dispatch) => {
        return callApi('products', 'POST', product).then(res => {
            dispatch(addProduct(res.data));
        });
    }
}

export const addProduct = (product) => {
    return {
        type: Types.ADD_PRODUCTS,
        product
    }
}

export const updateProductRequest = (product) => {
    return (dispatch) => {
        return callApi('products/' + product.id, 'PUT', product).then(res => {
            dispatch(updateProduct(product));
        });
    }
}

export const updateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCTS,
        product
    }
}