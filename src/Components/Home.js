import React from 'react'
import resume from '../assets/resume.jpg'
import young from '../assets/young.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export default function Home({rate,setRate}) {
    useEffect(() => {
        AOS.init();
      }, []);

      const navigate = useNavigate();


      function clickHandler(){
            navigate('/first');
            setRate(true);
      }
      

  return (
    <div>
        <div className='flex flex-col justify-center items-center gap-6 mt-10 text-center'>
            <p className='text-6xl '>Nix.The Best Resume Maker Online.</p>
            <p className='text-4xl'>Create a professional resume</p>
            <p className='text-slate-400'>Fill in the blanks,and download your resume instantly.</p>
            <button onClick={clickHandler} className='text-white bg-[#e44747] hover:bg-[#b12f2f] text-lg  py-4 px-8 rounded-[100px]'>Create your Resume now</button>
        </div>

        <div className=' mt-10 flex flex-col sm:flex-row gap-10 justify-between items-center  p-6'>
            <img className=' w-screen sm:w-[40%] ' src={resume} alt="" />
            <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" className=''>
                    <p className='custom-bg p-9 z-40 shadow-2xl text-slate-700'>Your Resume is underwhelming and you deserve better. Get that fresh look with our Resume template. Click on <span className='font-bold'>"Create your Resume now"</span> to build your Resume in minutes. Blow away recruiters with sleek designs. Let employers see your true self—the best candidate for the job.</p> 
            </div>
        </div>

        <div className=' mt-10 flex flex-col sm:flex-row-reverse gap-10 justify-between items-center  p-6'>
            <img  className='w-screen sm:w-[40%]' src={young} alt="" />
            <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" className=''>
                    <p className='custom-bg p-9 z-40 shadow-2xl text-slate-700'>With our user-friendly interface, you can effortlessly craft a visually appealing and compelling resume that stands out from the crowd.Let your accomplishments shine as you showcase your potential to potential employers. Start your journey to career excellence today with our intuitive resume maker, designed to help you make a lasting impression.</p> 
            </div>
        </div>

        <div className=' flex flex-col justify-center items-center gap-5 mt-36'>
            <p className='w-[100%] text-6xl text-slate-600 select-none'>Suggestion</p>
            <input data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" className=' w-[50%] bg-slate-100 p-3 outline-1 outline-slate-600 ' placeholder='full name' type="text" />
            <input data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400" className=' w-[50%] bg-slate-100 p-3 outline-1 outline-slate-600 ' placeholder='email' type="email" />
            <input data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600" className=' w-[50%] bg-slate-100 p-3 outline-1 outline-slate-600 ' placeholder='Subject' type="text" />
            <textarea data-aos="fade-up" data-aos-duration="1200" data-aos-delay="800" className='w-1/2 bg-slate-100 p-3 outline-1 outline-slate-600 ' placeholder='Type your Suggestion here' name="" id="" cols="30" rows="10"></textarea>
            <button data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" className='text-white bg-[#e44747] hover:bg-[#b12f2f] py-2 px-8 rounded-lg' >Submit</button>
        </div>

        <div className='bg-[#1d1d20] text-white mt-7'>
            <div className='flex flex-col gap-5 sm:flex-row sm:justify-between p-5'>
                <p>About | Accessibility | Contact | Privacy | Policy | Terms of Service</p>
                <p>Call Us 1800-985-7XXX</p>
            </div>
            <p className='p-5'>© 2023 Works Limited. All Rights Reserved.</p>
        </div>
    </div>
  )
}
