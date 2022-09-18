import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../firebase';
import profilepic from "../images/pfp.jpg";


const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Convey</span>
      <div className="user">
        <img src={profilepic} alt="" />
        <span>Ayush</span>
        <button onClick = {()=>signOut(auth)}>Sign out</button>
      </div>
    </div>
  )
}

export default Navbar