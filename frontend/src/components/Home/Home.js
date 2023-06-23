import React, { Fragment, useEffect, useState } from "react";
import Product from "./Product.js"
import "./Home.css"
import MetaData from "../layout/MetaData.js";
import { getProduct } from "../../actions/productAction.js"
import { useSelector, useDispatch } from "react-redux"
import Loader from "../layout/Loader/Loader.js";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert()
  const dispatch = useDispatch()
  const { loading, error, products, } = useSelector(state => state.products)
  const [page, setPage] = useState(1)


  useEffect(() => {
    if (error) {
      return alert.error(error)
    }
    dispatch(getProduct())
  }, [dispatch, error, alert])
  useEffect(() => {
    dispatch(getProduct("", "", page));
  }, [dispatch, page]);


  return (
    <Fragment>
      {loading ? <Loader /> : <Fragment>
        <MetaData title="space-x" />
        <div className="banner">
          <p>Welcome to space X</p>
          <h1>FIND AMAZING MISSIONS BELOW</h1>
          <a href="#container">
            <button>
              Scroll
            </button>
          </a>
        </div>
        <h2 className="homeHeading">MISSIONS</h2>
        <div className="container" id="container">
          {products && products.map(product => (
            <Product key={product.light_number} products={product} />
          ))}
        </div>

        <div style={{ display: 'flex', margin: 'auto', width: "100%", justifyContent: "center", gap: "10px" }}>
          <button disabled={page <= 1} onClick={() => { setPage(page - 1) }}>-</button>
          <button>{page}</button>
          <button onClick={() => { setPage(page + 1) }}>+</button>
        </div>


      </Fragment>}
    </Fragment>
  )
}

export default Home
