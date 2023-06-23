import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    CLEAR_ERRORS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS,
} from "../constants/productConstatnts";
import axios from "axios"
//,status,color,

export const getProduct = (keyword = "", selectedOption, page = 1) => async (dispatch) => {

    try {
        dispatch({ type: ALL_PRODUCT_REQUEST })

        let link = `https://api.spacexdata.com/v3/launches?mission_name=${keyword}&limit=10&offset=${page * 10}`
        if (selectedOption) {
            link = `https://api.spacexdata.com/v3/launches?mission_name=${keyword}&launch_success=${selectedOption}&limit=10&offset=${page * 10}`
        }
        const { data } = await axios.get(link)
        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error.respnse.data.message
        })
    }
}



export const getProductDetails = (id) => async (dispatch) => {
    console.log(id)
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })
        const { data } = await axios.get(`https://api.spacexdata.com/v3/launches/${id}`)

        console.log(data)

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.respnse.data.message
        })
    }
}

//to clear all errors
export const clarErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}