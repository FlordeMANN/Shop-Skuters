import { combineReducers } from 'redux'
import productsReducers from './reducers/productsReducer'

export default combineReducers({
    products: productsReducers
})