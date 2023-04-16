import React from 'react';
import {useEffect} from "react"
import './App.css';
import Header from "./components/layout/Header/Header.js"
import Footer from "./components/layout/Footer/Footer.js"
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import webfont from "webfontloader"
import Home from "./components/Home/Home.js"
import ProductDetails from "./components/Product/ProductDetails.js"
import Games from './components/Product/Games';


import SignUp from './components/user/Signup';
import Login from './components/user/Login';



function App() {
  
  useEffect(() => {
    webfont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);
  return (
   
      <Router>
        
      <Header/>
<Routes>
   
 <Route extact path="/" element={<Home/>}/>
 <Route extact path="/product/:id" element={<ProductDetails/>}/>
 <Route extact path="/products" element={<Games/>}/>
 <Route extact path="/login" element={<Login/>}/>
 <Route extact path="/signup" element={<SignUp/>}/>
 

 </Routes>
      <Footer/>
      
      </Router>
 

  );
}

export default App;
