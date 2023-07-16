import React from 'react'
import s1 from '../assets/s1.jpg'
import s2 from '../assets/s2.jpeg'
import { Link } from 'react-router-dom'

export default function Social() {
  return (
    <div>
      <p className='mt-10 mb-10 text-center font-bold text-xl'>Social media, a virtual tapestry of stories and updates, has the power to unite, inspire, and shape our interconnected world.</p>
      <div className='w-[100%] mx-auto flex flex-col justify-center items-center gap-10 mb-10' >
          <Link className='' to='/spage1' >
              <div>
              <img className='w-[500px] h-[300px]' src={s1} alt="" />
              <div className='flex justify-between'>
                  <p className='text-sm font-bold'>By: <span>Leland Farmer</span></p>
                  <p className='text-sm' >on JAN 28, 2023</p>
              </div>
          </div>
        </Link>

          <Link to='/spage2' >
              <div>
              <img className='w-[500px] h-[300px]' src={s2} alt="" />
              <div className='flex justify-between'>
                  <p className='text-sm font-bold'>By: <span>Adrienn Ujhelyi</span></p>
                  <p className='text-sm' >on  AUG 11, 2023</p>
              </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
