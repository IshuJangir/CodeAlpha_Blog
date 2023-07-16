import React from 'react'
import { Link } from 'react-router-dom'
import tr1 from '../assets/tr1.jpg'
import tr2 from '../assets/tr2.jpg'
import tr3 from '../assets/tr3.jpg'


export default function Travel() {
  return (
    <div>
        <p className='mt-10 mb-10 text-center font-bold text-xl'>Exploring the world's wonders, travel is a passport to discovery, unraveling the tapestry of diverse landscapes, cultures, and untold stories.</p>
        <div className='w-[100%] mx-auto flex flex-col justify-center items-center gap-10 mb-10' >
          <Link className='' to='/trpage1' >
              <div>
              <img className='w-[500px] h-[300px]' src={tr1} alt="" />
              <div className='flex justify-between'>
                  <p className='text-sm font-bold'>By: <span>Dave and Issy Sheehan</span></p>
                  <p className='text-sm' >on July 14th 2023</p>
              </div>
          </div>
        </Link>

          <Link to='/trpage2' >
              <div>
              <img className='w-[500px] h-[300px]' src={tr2} alt="" />
              <div className='flex justify-between'>
                  <p className='text-sm font-bold'>By: <span>Alexis M Spencer</span></p>
                  <p className='text-sm' >on  June 27th 2023</p>
              </div>
          </div>
        </Link>


          <Link to='/trpage3' >
              <div>
              <img className='w-[500px] h-[300px]' src={tr3} alt="" />
              <div className='flex justify-between'>
                  <p className='text-sm font-bold'>By: <span>Bellini</span></p>
                  <p className='text-sm' >on July 10th 2023</p>
              </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
