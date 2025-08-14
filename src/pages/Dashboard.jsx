import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="body w-[100vw] min-h-[calc(100vh-60px)] bg-white flex items-center px-1">
        <div className="sidebar w-1/3 min-h-[calc(100vh-60px)] offset shadow-lg bg-violet-500 rounded-xl"></div>
        <div className="main w-2/3 min-h-[calc(100vh-60px)] offset shadow-lg rounded-xl  m-1"></div>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard
