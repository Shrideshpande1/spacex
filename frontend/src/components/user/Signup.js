import axios from 'axios';
import React, { useState } from 'react';
import {Link} from "react-router-dom"
import "./Signup.css"
function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');



  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };
  const handlename = event => {
    setName(event.target.value);
  };

 

 
  const handleSubmit = async (e) => {
    const post = {
      email,
      password,
      name
    };
    try {
      const res = await axios.post("https://giddy-lime-xerus.cyclic.app/api/g1/register", post);
      alert("user successfully loggedIn")
      
    } catch (error) {
      alert("please Enter Correct Information")
    }
  };

  return (
    <form onSubmit={handleSubmit} id='formdiv'>
      <label>
        name:
        <input type="text" value={name} onChange={handlename} />
      </label>
      <br />
     
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      
    
      <button type="submit">Submit</button>

      <Link to={"/"}>
        <button>Home</button>
        </Link>
    </form>
  );
}

export default SignUp;




