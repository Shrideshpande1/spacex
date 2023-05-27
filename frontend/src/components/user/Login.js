import React, { useState } from 'react';
import {Link} from "react-router-dom"
import axios from 'axios';
import "./Signup.css"
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
   const payload={
    email:username,
    password:password
   }
   axios.post("https://giddy-lime-xerus.cyclic.app/api/g1/login",payload)
   .then(res=>{
    alert("logged in ")
   })
   .catch(res => {
    alert("wrong credentials")
        });
  };



  return (
    <form onSubmit={handleSubmit} id='formdiv'>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
<Link to={"/signup"}>
      <button>SignIn</button>
</Link>
    </form>
  );
}

export default Login;
