import React from 'react'
import videoIcon from "../images/cam.png";
import addFriend from "../images/add.png";
import moreSettings from "../images/more.png";

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
    </div>
  )
}

export default Chatbox