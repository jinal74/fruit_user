import * as ActionTypes from '../ActionTypes';

const initialValues = {
    products: [],
    errorMsg: '',
    isLoading: false
}

const productsReducer = (state = initialValues, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                errorMsg: '',
                isLoading: false
            }
        default:
            return state;
    }
}

export default productsReducer;