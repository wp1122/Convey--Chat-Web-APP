import userEvent from '@testing-library/user-event';
import React, { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import profilepic from "../images/pfp.jpg";
const Message = ({message}) => {

  const {currentUser}= useContext(AuthContext);
  const {data} = useContext(ChatContext);

  const ref= useRef();
  useEffect(()=>{
    ref.current?.scrollIntoView({behavior:"smooth"});
  }, [message]);

  // console.log(message.date.toDate());
  return ( 
    <div ref={ref} className={`message ${message.senderId === currentUser.uid && "owner"}`}>
      <div className="messageInfo">
        <img src={message.senderId===currentUser.uid ? currentUser.photoURL : data.user.photoURL } alt="pfp" />
        <span>
          Today
        </span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="pfp2" />}
      </div>
    </div>
  );
};

export default Message;