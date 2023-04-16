import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    CLEAR_ERRORS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS,
  } from "../constants/productConstatnts";
import axios from "axios"


export const getProduct=(keyword="")=>async(dispatch)=>{
try {
    dispatch({type:ALL_PRODUCT_REQUEST})
    const {data}=await axios.get(`http://localhost:8080/api/g1/games?keyword=${keyword}`)

    
    dispatch({
        type:ALL_PRODUCT_SUCCESS,
        payload:data,
    })
   
} catch (error) {
    dispatch({
        type:ALL_PRODUCT_FAIL,
        payload:error.respnse.data.message
    })
}
}


export const getProductDetails=(id)=>async(dispatch)=>{
    console.log(id)
    try {
        dispatch({type:PRODUCT_DETAILS_REQUEST})
        const {data}=await axios.get(`http://localhost:8080/api/g1/game/${id}`)
     
        console.log( data)
        
        dispatch({
            type:PRODUCT_DETAILS_SUCCESS,
            payload:data,
        })
       
    } catch (error) {
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
            payload:error.respnse.data.message
        })
    }
    }

//to clear all errors
export const clarErrors=()=>async(dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}