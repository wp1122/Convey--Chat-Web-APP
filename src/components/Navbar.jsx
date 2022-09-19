import { signOut } from 'firebase/auth';
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { auth } from '../firebase';
import profilepic from "../images/pfp.jpg";


const Navbar = () => {

  const {currentUser}= useContext(AuthContext);

  return (
    <div className='navbar'>
      <span className='logo'>Convey</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick = {()=>signOut(auth)}>Sign out</button>
      </div>
    </div>
  )
}

export default Navbar