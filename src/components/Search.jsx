import React from 'react'
import profilepic from "../images/pfp.jpg";
const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Search a user'/>
      </div>
      <div className='userChat'>
        <img src={profilepic} alt="profile pic" />
        <div className='userChatInfo'>
          <span>Nancy</span>
        </div>
      </div>
    </div>
  )
}

export default Search