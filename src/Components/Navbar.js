import React, { useState } from 'react'
import nix from '../assets/nix.png'
import { Link } from 'react-router-dom'

export default function Navbar({rate,setRate}) {


  function clickHandler(){
    setRate(true);
  }

  function back(){
    setRate(false)
  }

  

  return (
    <div className='flex justify-between items-center bg-white shadow-xl pb-2'>
      <Link onClick={back} to={'/'} ><img className='w-40' src={nix} alt="" /></Link>
    { !rate &&
     <Link onClick={clickHandler} to={'/first'} > <button className='text-white bg-[#e44747] hover:bg-[#b12f2f]  py-2 px-4 m-3 uppercase'>Create</button></Link>}
     { rate &&
      <Link to={'/rate'} ><button className='text-white bg-[#e44747] hover:bg-[#b12f2f]  py-2 px-4 m-3 uppercase'>Rate Us</button></Link>
     }
    </div>
  )
}
