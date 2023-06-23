import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import Product from "../Home/Product";
import "./Games.css";
import Typography from "@mui/material/Typography";
import { Slider } from "@mui/material";
const Games = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);
  const [keyword, setKeyword] = useState("");
  const [price, setPrice] = useState([2000, 2022]);
  const [selectedOption, setSelectedOption] = useState("");
  const [color, setColor] = useState("");
  const [mile, setMile] = useState("");
  const [page, setPage] = useState(1)


  const searchSubmitHandler = (e) => {
    e.preventDefault();
  };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleColor = (event) => {
    setColor(event.target.value);
  };
  const handlemile = (event) => {
    setMile(event.target.value);
  };

  const priceHandler = (event, newprice) => {
    setPrice(newprice);
  };

  useEffect(() => {
    dispatch(getProduct(keyword, selectedOption, page));
  }, [dispatch, keyword, selectedOption, page]);


  return (
    <Fragment>
      <Fragment>
        <form className="searchBox" onSubmit={searchSubmitHandler}>
          <input
            type="text"
            placeholder="Search a mission write correct name..."
            onChange={(e) => setKeyword(e.target.value)}
          />
        </form>
      </Fragment>

      <div className="filterBox">
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="">Select an status</option>
          <option value="true">Launch Successfull</option>
          <option value="false">Launch Unuccessfull</option>
        </select>






      </div>

      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <h2 className="productsHeading">MISSIONS</h2>

          <div className="products">
            {products &&
              products.map((product) => (
                <Product key={product._id} products={product} />
              ))}
          </div>
        </Fragment>
      )}
      <div style={{ display: 'flex', margin: 'auto', width: "100%", justifyContent: "center", gap: "10px" }}>
        <button disabled={page <= 1} onClick={() => { setPage(page - 1) }}>-</button>
        <button>{page}</button>
        <button onClick={() => { setPage(page + 1) }}>+</button>
      </div>
    </Fragment>
  );
};

export default Games;
