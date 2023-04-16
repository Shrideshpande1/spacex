import React, { Fragment, useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getProduct } from '../../actions/productAction'
import Loader from '../layout/Loader/Loader'
import Product from '../Home/Product'
import "./Games.css"
const Games = () => {
  const dispatch=useDispatch()
  const {products,loading}=useSelector((state)=>state.products)
  const [keyword, setKeyword] = useState("");
  const [keydata,setKeydata]=useState("")
  
  
    console.log(keydata)
    const searchSubmitHandler = (e) => {
      const form={
        keyword
      }
      e.preventDefault();
      setKeydata(form)
    };
const hi=keydata
console.log(hi)
  useEffect(()=>{
    dispatch(getProduct())
  },[dispatch,keydata])
  return (
    <Fragment>
       <Fragment>
      
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Product ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </Fragment>

{loading?<Loader/>:<Fragment>
  <h2 className='productsHeading'>GAMES</h2>

<div className='products'>
{products && products.map((product)=>(
  <Product key={product._id} products={product}/>
))}
</div>

  </Fragment>}
    </Fragment>

  )
}

export default Games
