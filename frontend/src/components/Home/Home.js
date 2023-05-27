import React, { Fragment, useEffect } from "react";
import Product from "./Product.js"
import "./Home.css"
import MetaData from "../layout/MetaData.js";
import {getProduct} from "../../actions/productAction.js"
import {useSelector,useDispatch} from "react-redux"
import Loader from "../layout/Loader/Loader.js";
import { useAlert } from "react-alert";

const Home = () => {
  const alert=useAlert()
  const dispatch=useDispatch()
const {loading,error,products,productsCount}=useSelector(state=>state.products)
console.log("🚀 ~ file: Home.js:19 ~ Home ~ products:", products)

  useEffect(()=>{
    if(error){
      return alert.error(error)
    }
    dispatch(getProduct())
  },[dispatch,error,alert])


  return (
<Fragment>
  {loading?<Loader/>: <Fragment>
  <MetaData title="E-COMMERCE"/>
  <div className="banner">
<p>Welcome to car-dekho</p>
<h1>FIND AMAZING CARS BELOW</h1>
<a href="#container">
  <button>
    Scroll
  </button>
  </a>
  </div>
<h2 className="homeHeading">Featured CARS</h2>
<div className="container" id="container">
{products && products.map(product=>(
  <Product key={product._id} products={product}/>
))}
</div>



 </Fragment>}
</Fragment>
  )
}

export default Home
