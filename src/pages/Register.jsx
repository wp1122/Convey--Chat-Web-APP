import React from 'react'
import addAvatar from "../images/addAvatar.png";

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">Convey</span>
            <span className="title">Sign up</span>
            <form>
                <input type="text" placeholder="Username"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input style={{display:"none"}} type="file" id="file"/>
                <label htmlFor='file'>
                  <img src={addAvatar} alt="Add your Profile Pic" />
                  <span>Add your profile pic</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>Already have an account?  Sign in</p>
        </div>
    </div>
  )
} 

export default Register;