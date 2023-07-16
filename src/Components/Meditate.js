import React from 'react'
import { Link } from 'react-router-dom'
import m1 from '../assets/m1.avif'
import m2 from '../assets/m2.jpg'

export default function Meditate() {
  return (
    <div>
      <p className='mt-10 mb-10 text-center font-bold text-xl'>   Close your eyes, let go of the noise,<br />
              Inhale serenity, exhale the choice,<br />
              To find tranquility, let your mind unwind,<br />
              Meditate, and a peaceful sanctuary you shall find.
      </p>

      <div className='w-[100%] mx-auto flex flex-col justify-center items-center gap-10 mb-10' >
          <Link className='' to='/mpage1' >
              <div>
              <img className='w-[500px] h-[300px]' src={m1} alt="" />
              <div className='flex justify-between'>
                  <p className='text-sm font-bold'>By: <span>SHALINI BAHL-MILNE</span></p>
                  <p className='text-sm' >on JUNE 28, 2023</p>
              </div>
          </div>
        </Link>

          <Link to='/mpage2' >
              <div>
              <img className='w-[500px] h-[300px]' src={m2} alt="" />
              <div className='flex justify-between'>
                  <p className='text-sm font-bold'>By: <span>SHAUNA SHAPIRO</span></p>
                  <p className='text-sm' >on  JULY 11, 2023</p>
              </div>
          </div>
        </Link>
      </div>


    </div>
  )
}
