import React, { useState } from 'react'
import hero from '../assets/hero.png'
import {BsPen} from 'react-icons/bs'
import {FaGreaterThan} from 'react-icons/fa'
import fashion from '../assets/fashion.png'
import food from '../assets/food.png'
import meditate from '../assets/meditate.jpg'
import social from '../assets/social.jpg'
import tech from '../assets/tech.png'
import travel from '../assets/travel.png'
import linked from '../assets/linked.png'
import dis from '../assets/dis.png'
import tele from '../assets/tele.png'
import insta from '../assets/insta.png'
import { Link } from 'react-router-dom'
import artsign from '../assets/artsign.png'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Home() {

        useEffect(() => {
                AOS.init();
              }, []);



  return (
    <div className='w-[95%] mx-auto transition-all overflow-hidden'>


        <div className="flex flex-col sm:flex-row justify-around items-center">
                <div className='flex flex-col text-center sm:text-start'>
                        <p className='text-7xl mb-5 '>Heaven For Bloggers</p>
                        <p className="text-sm   text-slate-400">
                        Discover captivating stories, insightful articles, and expert advice
                        on our blog, where we explore the fascinating world. Join us on a
                        journey of knowledge and inspiration!
                        </p>

                        <div className='flex gap-10 mt-10 justify-center sm:justify-start'>
                            <button  className='flex items-center gap-2 cursor-pointer bg-[#00ABFE] hover:bg-[#087fba] px-4 py-2 rounded text-white'>Create Your Own Blog Today <BsPen className='mt-1' ></BsPen> </button>
                            <a className='flex items-center gap-1 cursor-pointer' >Read Blogs <FaGreaterThan className='text-xs mt-1' ></FaGreaterThan> </a>
                        </div>
                </div>

                <img className='w-[500px] h-[500px]' src={hero} alt="" />
        </div>

      <p className='w-[100%] text-center  text-3xl mb-5'>Our Blogs</p>

      <div className='w-[50%] mx-auto mb-5 h-1 bg-[#00ABFE] rounded-full items-center justify-center ' ></div>


        <div className='blog justify-center flex flex-col gap-10 transition-all'>
        
            <Link to='/fashion' >
                    <div data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="200" data-aos-offset="50" className='cursor-pointer flex flex-col  sm:flex-row rounded-2xl relative shadow-2xl gap-10 items-center  transition-all ' >
                            <img className='w-[400px] h-[250px] blog relative rounded-2xl' src={fashion} alt="" />
                            <p className=' p-5 text-3xl w-[100%] sm:w-[50%] mx-auto' >Fashion: <br/> <span className='text-sm' >Fashion is an ever-evolving form of self-expression, where creativity intertwines with personal style to shape the way we present ourselves to the world.</span> </p>
                    </div>
            </Link>


            <Link to='/meditate' >
                    <div data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="200" data-aos-offset="50" className='cursor-pointer flex flex-col sm:flex-row items-center gap-10 rounded-2xl relative shadow-2xl  transition-all ' >
                            <img className='w-[400px] h-[250px] blog relative rounded-2xl' src={meditate} alt="" />
                            <p className=' p-5 text-3xl w-[100%] sm:w-[50%] mx-auto' >Meditate: <br/> <span className='text-sm' >In the stillness of meditation, we find solace and clarity, unlocking inner peace and nurturing a deep connection with ourselves and the present moment.</span> </p>
                    </div>
            </Link>

            <Link to='/social' >
                    <div data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="200" data-aos-offset="50" className='cursor-pointer flex flex-col sm:flex-row items-center gap-10 rounded-2xl relative shadow-2xl  transition-all ' >
                            <img className='w-[400px] h-[250px] blog relative rounded-2xl' src={social} alt="" />
                            <p className=' p-5 text-3xl w-[100%] sm:w-[50%] mx-auto' >Social media:<br/> <span className='text-sm' >Social media has transformed the way we connect, share, and communicate, bridging distances and enabling us to form virtual communities that transcend physical boundaries.</span> </p>
                    </div>
            </Link>

            <Link to='/tech' >
                    <div data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="200" data-aos-offset="50" className='cursor-pointer flex flex-col sm:flex-row items-center gap-10 rounded-2xl relative shadow-2xl  transition-all ' >
                            <img className='w-[400px] h-[250px] blog relative rounded-2xl' src={tech} alt="" />
                            <p className=' p-5 text-3xl w-[100%] sm:w-[50%] mx-auto' >Tech: <br/> <span className='text-sm' >Technology is a catalyst for innovation, propelling humanity forward by empowering us with tools and solutions that revolutionize the way we live, work, and interact with the world.</span> </p>
                    </div>
            </Link>

            <Link to='/food' >
                    <div data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="200" data-aos-offset="50" className='cursor-pointer flex flex-col sm:flex-row items-center gap-10 rounded-2xl relative shadow-2xl  transition-all ' >
                            <img className='w-[400px] h-[250px] blog relative rounded-2xl' src={food} alt="" />
                            <p className=' p-5 text-3xl w-[100%] sm:w-[50%] mx-auto' >Food:  <br/> <span className='text-sm' >Food is an artful blend of flavors, textures, and cultures, uniting people from all walks of life in the joyful pursuit of nourishment and culinary delight.</span> </p>
                    </div>
            </Link>

            <Link to='/travel' >
                    <div data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="200" data-aos-offset="50" className='cursor-pointer flex flex-col sm:flex-row items-center gap-10 rounded-2xl relative shadow-2xl  transition-all ' >
                            <img className='w-[400px] h-[250px] blog relative rounded-2xl' src={travel} alt="" />
                            <p className=' p-5 text-3xl w-[100%] sm:w-[50%] mx-auto' >Travel: <br/> <span className='text-sm' >Travel is an enchanting journey that broadens our horizons, exposes us to diverse cultures, and allows us to create unforgettable memories that linger long after the adventure ends.</span> </p>
                    </div>
            </Link>
       

        </div>


        <div className='w-[100%] flex flex-col justify-center items-center mt-20 mb-10'>
            <div className='mb-5 text-5xl text-center'>
                <p>Join Our Blogging Community</p>
            </div>

            <div className='flex w-[60%] justify-around flex-wrap'>
                <div className='flex flex-col gap-2 cursor-pointer items-center'>
                    <img className='  w-[100px] h-[100px] ' src={dis} alt="" />
                    <p className='text-xl text-slate-400' >Discord</p>
                </div>

                <div className='flex flex-col gap-2 cursor-pointer items-center'>
                    <img className='  w-[100px] h-[100px] scale-90 ' src={linked} alt="" />
                    <p className='text-xl text-slate-400' >LinkedIn</p>
                </div>

                <div className='flex flex-col gap-2 cursor-pointer items-center'>
                    <img className='  w-[100px] h-[100px] scale-75 ' src={insta} alt="" />
                    <p className='text-xl text-slate-400' >Instagram</p>
                </div>

                <div className='flex flex-col gap-2 cursor-pointer items-center'>
                    <img className='  w-[100px] h-[100px] scale-75 ' src={tele} alt="" />
                    <p className='text-xl text-slate-400' >Telegram</p>
                </div>
                
            </div>
        </div>

        



        <div className='relative w-[100%] bg-slate-200 h-[150px] gap-3 flex flex-col justify-center items-center'>
            <div className='flex gap-5 font-semibold flex-wrap justify-center'>
                <p>About Us</p>
                <p>The Team</p>
                <p>Privacy Policy</p>
                <p>Cookie Policy</p>
                <p>Contact Us</p>
                <p>Site Map</p>
            </div>

            <div>
                <p>Sister Website: <a className='text-blue-400' target='_blank' href="resumebuilder.com">resumebuilder.com</a></p>
            </div>
            
            <div>
                    © 2022 Position Is Everything • All right reserved
            </div>
            <img className='w-20 absolute bottom-0 right-0' src={artsign} alt="" />

        </div>


    
   

      
    </div>
  )
}
