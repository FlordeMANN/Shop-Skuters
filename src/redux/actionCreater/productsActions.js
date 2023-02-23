import { CHANGE_PRODUCTS, CHANGE_PRODUCT, GET_ELEC, GET_GYRO, GET_SEGWAY, GET_PRODUCTS } from '../actions/actions'

export const changeProducts = (payload) => ({
    type: CHANGE_PRODUCTS,
    payload
})

export const changeProduct = (payload) => ({
    type: CHANGE_PRODUCT,
    payload
})

export const getGyro = (payload) => ({
    type: GET_GYRO,
    payload
})

export const getSegway = (payload) => ({
    type: GET_SEGWAY,
    payload
})

export const getElec = (payload) => ({
    type: GET_ELEC,
    payload
})

export const getProducts = () => ({
    type: GET_PRODUCTS,
})