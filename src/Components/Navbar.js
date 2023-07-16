import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='w=[95%] flex justify-around p-5  items-center'>
       <Link to='/'>
          <div className='font-bold text-2xl'>
              Bloginix
          </div>
       </Link>


        <div className=' hidden sm:flex gap-10 w-[100%] justify-center'>
            <Link to='/' ><p>Home</p></Link>
            <p>Blogs</p>
            <p>Contact us</p>
        </div>


        <div className=' hidden sm:flex cursor-pointer bg-[#00ABFE] hover:bg-[#087fba] px-4 py-2 rounded text-white'>
           Comment
        </div>
    </div>
  )
}
