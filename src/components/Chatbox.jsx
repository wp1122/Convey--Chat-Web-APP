import React from 'react'
import videoIcon from "../images/cam.png";
import addFriend from "../images/add.png";
import moreSettings from "../images/more.png";
import Messages from './Messages';
import Input from './Input';

const Chatbox = () => {
  return (
    <div className='chatbox'>
      <div className='chatInfo'>
        <span>Nancy</span>
        <div className="chatIcons">
          <img src={videoIcon} alt="videocall" />
          <img src={addFriend} alt="Add friend" />
          <img src={moreSettings} alt="More settings" />
        </div>
      </div>
        <Messages/>
        <Input/>
    </div>
  )
}

export default Chatbox