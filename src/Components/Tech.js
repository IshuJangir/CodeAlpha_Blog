import React from 'react'
import { Link } from 'react-router-dom'
import t1 from '../assets/t1.jpg'
import t2 from '../assets/t2.webp'
import t3 from '../assets/t3.jpeg'


export default function Tech() {
  return (
    <div>
      <p className='mt-10 mb-10 text-center font-bold text-xl'>From the wonders of artificial intelligence to the seamless connectivity of smart devices, technology amplifies our potential and transforms the way we live and interact.</p>
      <div className='w-[100%] mx-auto flex flex-col justify-center items-center gap-10 mb-10' >
          <Link className='' to='/tpage1' >
              <div>
              <img className='w-[500px] h-[300px]' src={t1} alt="" />
              <div className='flex justify-between'>
                  <p className='text-sm font-bold'>By: <span>Robert Mitchell</span></p>
                  <p className='text-sm' >on FEB 28, 2021</p>
              </div>
          </div>
        </Link>

          <Link to='/tpage2' >
              <div>
              <img className='w-[500px] h-[300px]' src={t2} alt="" />
              <div className='flex justify-between'>
                  <p className='text-sm font-bold'>By: <span>Andrew Sullivan</span></p>
                  <p className='text-sm' >on  JULY 14, 2023</p>
              </div>
          </div>
        </Link>


          <Link to='/tpage3' >
              <div>
              <img className='w-[500px] h-[300px]' src={t3} alt="" />
              <div className='flex justify-between'>
                  <p className='text-sm font-bold'>By: <span>Kamesh Shekar</span></p>
                  <p className='text-sm' >on  SEP 19, 2022</p>
              </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
