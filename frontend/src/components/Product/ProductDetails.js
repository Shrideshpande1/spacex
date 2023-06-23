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
{/* 
<img src={products.links.mission_patch} alt='something'/>
<h3>{products.mission_name}</h3>
<p>Launch Site : {products.launch_site.site_name}</p>
<p>Launch Date :{products.launch_date_local}</p>
<p>launch failuare details :{products.details}</p> */}
      {product && (
        <Fragment>
          <div className="ProductDetails">
            <div>
              <img  src={product.links.mission_patch} alt={product.name} />
            </div>
            <div className="detailsBlock-1">
              <h1>{product.mission_name}</h1>
            </div>
            <div className="detailsBlock-2">
              <p>
                {" "}
                <strong>Mission Number : </strong>
                {product.flight_number}
              </p>
              {/* <p>
                {" "}
                <strong>description : </strong>
                {product.details}
              </p> */}
              <p>
                <strong> launch site
:</strong> {product.launch_site.site_name
}
              </p>

              <p>
                <strong> launch date local:</strong> {product.launch_date_local}
              </p>
              <p>
                <strong> launch success
:</strong> {`${product.launch_success}`}
              </p>
            </div>
          
          </div>
        </Fragment>
      )}
    </>
  );
};

export default ProductDetails;
