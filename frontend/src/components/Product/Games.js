import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import Product from "../Home/Product";
import "./Games.css";
const Games = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);
  const [keyword, setKeyword] = useState("");

  const [selectedOption, setSelectedOption] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
  };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    dispatch(getProduct(keyword,selectedOption));
  }, [dispatch, keyword,selectedOption]);
  return (
    <Fragment>
      <Fragment>
        <form className="searchBox" onSubmit={searchSubmitHandler}>
          <input
            type="text"
            placeholder="Search a game ..."
            onChange={(e) => setKeyword(e.target.value)}
          />
        </form>
      </Fragment>

      <div className="filterBox">
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="">Select an option</option>
          <option value="out-door">out-door</option>
          <option value="in-door">in-door</option>
         
        </select>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <h2 className="productsHeading">GAMES</h2>

          <div className="products">
            {products &&
              products.map((product) => (
                <Product key={product._id} products={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Games;
