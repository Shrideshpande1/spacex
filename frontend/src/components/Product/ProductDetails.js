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
      {product && (
        <Fragment>
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
                <strong>Status : </strong>
                {product.status}
              </p>
              <p>
                {" "}
                <strong>description : </strong>
                {product.description}
              </p>
              <p>
                <strong>Place :</strong> {product.place}
              </p>

              <p>
                <strong> Colour:</strong> {product.color}
              </p>
              <p>
                <strong> Mileage:</strong> {product.mileage}/lit
              </p>
            </div>
            <div className="detailsBlock-3">
              <h1>
                {" "}
                <strong>Key Points : </strong>
              </h1>

              {product.points &&
                product.points.map((ele) => (
                  <div key={ele._id}>
                    <li>{ele.point}</li>
                  </div>
                ))}
            </div>
          </div>
        </Fragment>
      )}
    </>
  );
};

export default ProductDetails;
