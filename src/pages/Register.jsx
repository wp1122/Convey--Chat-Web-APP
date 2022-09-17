import React from 'react'

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">Convey</span>
            <span className="title">Register</span>
            <form>
                <input type="text" placeholder="Username"/>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <input type="file" id="file"/>
                <label htmlFor=''
                <button>Sign Up</button>
            </form>
            <p>Already have an account?  Log in</p>
        </div>
    </div>
  )
} 

export default Register;