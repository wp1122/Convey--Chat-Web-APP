import React, { useContext } from 'react'
import videoIcon from "../images/cam.png";
import addFriend from "../images/add.png";
import moreSettings from "../images/more.png";
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from '../context/ChatContext';

const Chatbox = () => {

  const {data}= useContext(ChatContext);

  return (
    <div className='chatbox'>
      <div className='chatInfo'>
        <span>{data.user?.displayName}</span>
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