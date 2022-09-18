import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import addAvatar from "../images/addAvatar.png";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

const Login = () => {

  const [err,setErr]= useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const email=e.target[0].value;
    const password=e.target[1].value;
   try{
    await signInWithEmailAndPassword(auth, email, password)
    setErr(false);
    navigate("/");
   }catch(err){
      // console.log("bruhhhhh");
     setErr(true);
   }
  };




  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">Convey</span>
            <span className="title">Sign in</span>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button>Sign in</button>
                {err && <span className='errorClass'>Something went wrong, Try again</span>}
            </form>
            <p>Don't have an account? <Link to="/register">Sign up</Link></p>
        </div>
    </div>
  )
} 

export default Login;