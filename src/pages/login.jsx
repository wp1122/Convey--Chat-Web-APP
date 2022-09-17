import React from 'react'
import addAvatar from "../images/addAvatar.png";

const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">Convey</span>
            <span className="title">Sign in</span>
            <form>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button>Sign in</button>
            </form>
            <p>Don't have an account? Sign up</p>
        </div>
    </div>
  )
} 

export default Login;