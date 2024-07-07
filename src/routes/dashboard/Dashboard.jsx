import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='bg-[#333] h-screen gap-3 flex items-center flex-col justify-center '>
      <Link to='/' className='text-2xl text-white'>Ai.Dev</Link>
      <h1 className='text-4xl text-white'>Welcome to Dashboard</h1>
    </div>
  )
}

export default Dashboard
