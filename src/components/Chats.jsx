import React from 'react'
import profilepic from "../images/pfp.jpg";

const Chats = () => {
  return (
    <div className='chats'>
      <div className='userChat'>
        <img src={profilepic} alt="profile pic" />
        <div className='userChatInfo'>
          <span>Nancy</span>
          <p>some message</p>
        </div>
      </div>

      <div className='userChat'>
        <img src={profilepic} alt="profile pic" />
        <div className='userChatInfo'>
          <span>Nancy</span>
          <p>some message</p>
        </div>
      </div>

      <div className='userChat'>
        <img src={profilepic} alt="profile pic" />
        <div className='userChatInfo'>
          <span>Nancy</span>
          <p>some message</p>
        </div>
      </div>
    </div>
  )
}

export default Chats