import React from 'react'
import { Link } from 'react-router-dom'
import fo1 from '../assets/fo1.jpg'
import  fo2 from '../assets/fo2.jpg'


export default function Food() {
  return (
    <div>
      <p className='mt-10 mb-10 text-center font-bold text-xl'>Food, a universal language of flavors and cultures, brings people together, nurturing both body and soul.</p>
      <div className='w-[100%] mx-auto flex flex-col justify-center items-center gap-10 mb-10' >
          <Link className='' to='/fopage1' >
              <div>
              <img className='w-[500px] h-[300px]' src={fo1} alt="" />
              <div className='flex justify-between'>
                  <p className='text-sm font-bold'>By: <span>ISHU JANGIR</span></p>
                  <p className='text-sm' >on MAR 09, 2021</p>
              </div>
          </div>
        </Link>

          <Link to='/fopage2' >
              <div>
              <img className='w-[500px] h-[300px]' src={fo2} alt="" />
              <div className='flex justify-between'>
                  <p className='text-sm font-bold'>By: <span>CHRIS WANES</span></p>
                  <p className='text-sm' >on  SEP 15, 2019</p>
              </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
