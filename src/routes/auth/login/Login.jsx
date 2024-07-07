import React from 'react'

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-[350px] w-full text-center">
        <Link to='/' className="text-4xl font-semibold text-[#333]">Ai.Dev</Link>
        <form action="#" className="flex flex-col gap-4 my-8 w-full">
          <input className="text-[#333] border-2 border-cyan-500 py-2 px-2 outline-none rounded-md text-[18px] tracking-wide focus:border-green-500" type="email" placeholder='Email' />
          <input className="text-[#333] border-2 border-cyan-500 py-2 px-2 outline-none rounded-md text-[18px] tracking-wide focus:border-green-500" type="password" placeholder='Password' />
          <button className="text-white py-2 rounded bg-cyan-500 text-[18px] tracking-wide" type="submit">Register</button>
        </form>
      </div>
    </div>
  )
}

export default Login
