import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    CLEAR_ERRORS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS,
  } from "../constants/productConstatnts";
import axios from "axios"
//,status,color,

export const getProduct=(keyword="",status,color,mile,price=[0,1000000])=>async(dispatch)=>{
try {
    dispatch({type:ALL_PRODUCT_REQUEST})

    let link=`https://giddy-lime-xerus.cyclic.app/api/g1/games?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}`
    if(status ){
     link=`https://giddy-lime-xerus.cyclic.app/api/g1/games?keyword=${keyword}&status=${status}&mileage=${mile}&color=${color}&price[gte]=${price[0]}&price[lte]=${price[1]}`
    }
    const {data}=await axios.get(link)

 
    
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
        const {data}=await axios.get(`https://giddy-lime-xerus.cyclic.app/api/g1/game/${id}`)
     
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