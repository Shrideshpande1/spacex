import React, { Fragment, useEffect } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clarErrors, getProductDetails } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import * as moment from "moment";
const ProductDetails = () => {
  const alert = useAlert();

  const { id } = useParams();
  // console.log(id);
  const dispatch = useDispatch();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clarErrors());
    }

    dispatch(getProductDetails(id));
  }, [dispatch, id, error, alert]);

  return (
    <>
      {product && <Fragment>
          <div className="ProductDetails">
            <div>
              <img src={product.image} alt={product.name} />
            </div>
            <div className="detailsBlock-1">
              <h1>{product.name}</h1>
            </div>
            <div className="detailsBlock-2">
              <p>
                {" "}
                <strong>description : </strong>
                {product.description}
              </p>
              <p>
                <strong>Place :</strong> {product.place}
              </p>
              <p>
                <strong>Max Limit :</strong> {product.limit}
              </p>

              <p>
                <strong> Start time:</strong> {product.starttime}
              </p>
              <p>
                <strong> Start time:</strong> {product.endtime}
              </p>
            </div>
            <div className="detailsBlock-3">
              <h1>
                {" "}
                <strong>Players/Teams Name : </strong>
              </h1>

              {product.players &&
                product.players.map((ele) => (
                  <div key={ele.name}>
                    <li>{ele.name}</li>
                  </div>
                ))}
            </div>

            <h2>To Enroll</h2>
            <div>
              {" "}
              {product.limit > product.players.length ? (
                <div>
                  <input placeholder="Enter your name/Team name" />
                  <button>ADD</button>
                </div>
              ) : (
                <p>you can not fill the form</p>
              )}
              {}
            </div>
          </div>
        </Fragment>}
        
      
    </>
  );
};

export default ProductDetails;
