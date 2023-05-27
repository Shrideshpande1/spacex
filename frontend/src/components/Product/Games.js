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
  const [price, setPrice] = useState([0, 1000000]);
  const [selectedOption, setSelectedOption] = useState("");
  const [color, setColor] = useState("");
  const [mile, setMile] = useState("");

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
  //,selectedOption,color
  useEffect(() => {
    dispatch(getProduct(keyword, selectedOption, color, mile, price));
  }, [dispatch, keyword, selectedOption, color, mile, price]);
  return (
    <Fragment>
      <Fragment>
        <form className="searchBox" onSubmit={searchSubmitHandler}>
          <input
            type="text"
            placeholder="Search a car ..."
            onChange={(e) => setKeyword(e.target.value)}
          />
        </form>
      </Fragment>

      <div className="filterBox">
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="">Select an option</option>
          <option value="second-hand">second-hand</option>
          <option value="brand-new">brand-new</option>
        </select>

        <select value={color} onChange={handleColor}>
          <option value="">Select Colour</option>
          <option value="black">black</option>
          <option value="white">white</option>
          <option value="red">red</option>
        </select>

        <select value={mile} onChange={handlemile}>
          <option value="">Select Mileage</option>
          <option value="12">12 KM/L</option>
          <option value="13">13 KM/L</option>
          <option value="14">14 KM/L</option>
        </select>

        <div className="filterBox">
          <Typography>price</Typography>
          <Slider
            value={price}
            onChange={priceHandler}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            min={0}
            max={1000000}
          />
        </div>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <h2 className="productsHeading">CARS</h2>

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
