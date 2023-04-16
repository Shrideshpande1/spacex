import React from 'react'
import {Link} from "react-router-dom"

import "./Home.css"
import * as moment from 'moment';

const Product = ({products}) => {

  const dateFromDB = products.date

  const formattedDate = moment(dateFromDB).utc().format('DD/MM/YY')

  return (
 
    <Link className='productCard' to={`/product/${products._id}`}>
<img src={products.image} alt='something'/>
<h1>{products.name}</h1>
<p>Place : {products.place}</p>
<p>Date :{formattedDate}</p>

<span>Max. Entry: {products.limit} Groups</span>

    </Link>
  )
}

export default Product
