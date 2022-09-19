import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import profilepic from "../images/pfp.jpg";
const Message = ({message}) => {

  const {currentUser}= useContext(AuthContext);
  const {data} = useContext(ChatContext);


  return ( 
    <div className='message owner'>
      {/* <div className="messageInfo">
        <img src={profilepic} alt="pfp" />
        <span>
          Just now
        </span>
      </div>
      <div className="messageContent">
        <p>heyy</p>
        <img src={profilepic} alt="pfp2" />
      </div> */}
    </div>
  )
}

export default Message