import { CHANGE_PRODUCTS, GET_PRODUCTS } from '../actions/actions'
import dataProducts from './products'

const initialState = {
    products: dataProducts
}

const productsReducers = (state = initialState, { type, payload }) => {
    switch (type) {

        case CHANGE_PRODUCTS:
            return {...state, products: payload }

        case GET_PRODUCTS:
            return {...state, products: initialState.products }

        default:
            return state
    }
}

export default productsReducers