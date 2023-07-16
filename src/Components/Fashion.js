import React from 'react'
import f1 from '../assets/f1.jpg'
import f2 from '../assets/f2.webp'
import f3 from '../assets/f3.webp'
import { Link } from 'react-router-dom'

export default function Fashion() {
  return (
    <div className='flex flex-col gap-10 justify-center items-center w-[80%] mx-auto text-xl mt-10 '>
      <p className='mb-10'>Fashion is a captivating realm where creativity, self-expression, and style intertwine to shape our visual narrative. It transcends mere clothing and becomes a powerful language that speaks volumes about who we are. From the timeless classics that evoke nostalgia to the cutting-edge trends that push boundaries, fashion serves as a vibrant reflection of our ever-evolving society. It celebrates diversity, embracing the kaleidoscope of cultures, tastes, and perspectives that make up our global tapestry. Whether it's the elegant sway of a tailored suit, the ethereal grace of a flowing gown, or the audacious statement of a bold ensemble, fashion empowers us to paint our individuality onto the canvas of life, a wearable art form that ignites passion and fuels the imagination. It is an ever-changing journey that invites us to explore, experiment, and discover our truest selves, stitching together a tapestry of beauty and confidence that radiates from within.</p>
      <Link to='/fpage1' >
          <div>
          <img className='w-[500px] h-[300px]' src={f1} alt="" />
          <div className='flex justify-between'>
              <p className='text-sm font-bold'>By: <span>PIYA DHIMAN</span></p>
              <p className='text-sm' >on 10 july 2023</p>
          </div>
      </div>
      
      
      </Link>
      <Link to='/fpage2' >
          <div>
          <img className='w-[500px] h-[300px] object-cover ' src={f2} alt="" />
          <div className='flex justify-between'>
              <p className='text-sm font-bold'>By: <span>DEVKI BHATT</span></p>
              <p className='text-sm' >on 6 July 2023</p>
          </div>
      </div>
      
      
      </Link>
      <Link to='/fpage3' >
          <div>
          <img className='w-[500px] h-[300px] object-cover' src={f3} alt="" />
          <div className='flex justify-between'>
              <p className='text-sm font-bold'>By: <span>LAURE GUILBAULT</span></p>
              <p className='text-sm' >on 6 July 2023</p>
          </div>
      </div>
      
      
      </Link>
    </div>
  )
}
