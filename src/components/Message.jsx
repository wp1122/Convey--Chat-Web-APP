import React from 'react'
import profilepic from "../images/pfp.jpg";
const Message = () => {
  return ( 
    <div className='message owner'>
      <div className="messageInfo">
        <img src={profilepic} alt="pfp" />
        <span>
          Just now
        </span>
      </div>
      <div className="messageContent">
        <p>heyy</p>
        <img src={profilepic} alt="pfp2" />
      </div>
    </div>
  )
}

export default Message