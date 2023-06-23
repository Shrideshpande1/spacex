import React from 'react'
import {Link} from "react-router-dom"

import "./Home.css"
import * as moment from 'moment';

const Product = ({products}) => {



  return (
 
    <Link className='productCard' to={`/product/${products.flight_number}`}>
<img src={products.links.mission_patch} alt='something'/>
<h3>{products.mission_name}</h3>
<p>Launch Site : {products.launch_site.site_name}</p>
<p>Launch Date :{products.launch_date_local}</p>


<p>
                <strong> launch success
:</strong> {`${products.launch_success}`}
              </p>


    </Link>
  )
}

export default Product
