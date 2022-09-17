import React from 'react'
import Chatbox from '../components/Chatbox';
import Sidebar from '../components/Sidebar';
const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar/>
        <Chatbox/>
      </div>
    </div>
  )
}

export default Home;