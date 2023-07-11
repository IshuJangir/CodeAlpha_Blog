import React, { useState } from 'react'
import { MdEmail } from 'react-icons/md';
import {BsFillTelephoneFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {FaUser} from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function First({handlePersonalData,rate,setRate }) {

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);


      function clickHandler(){
            navigate(-1);
            setRate(false);

      }

  const[personalData,setPersonalData]=useState({
    firstname:"",
    lastname:"",
    gender:"male",
    age:"",
    email:"",
    mob:"",
  })

  function changeHandler(event) {
    const {name, value, checked, type} = event.target;
    setPersonalData( (prev) => ({...prev, [name]:type === "checkbox" ? checked: value}) );
  }


  function submitHadler(){
    console.log(personalData)
    handlePersonalData(personalData);
  }

  useEffect(() => {
    const savedValue = localStorage.getItem('personalData');
    if (personalData) {
      setPersonalData(JSON.parse(savedValue));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('personalData', JSON.stringify(personalData));
  }, [personalData]);


  return (
    <div className=' relative flex flex-col justify-center items-center  mt-5'>
      <p className='flex gap-3 justify-center items-center text-3xl text-center'>Let's Start with some Personal Details <FaUser className='scale-75 mt-1'></FaUser> </p> 

      <div className='flex  flex-wrap justify-center items-center mt-5 gap-9 p-3'>
            <input data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200"  onChange={changeHandler} className='py-3 px-5 w-[100%]  sm:w-[40%] bg-slate-200' name='firstname' id='firstname' placeholder='First Name' type="text" value={personalData.firstname} />
            <input data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200" onChange={changeHandler} className='py-3 px-5 w-[100%]  sm:w-[40%] bg-slate-200' name='lastname' id='lastname' placeholder='Last Name' type="text" value={personalData.lastname} />
            <select data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200"  className='py-3 px-5  w-[100%]  sm:w-[40%] bg-slate-200' onChange={changeHandler} value={personalData.gender} name="gender" id="gender">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <input data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200" onChange={changeHandler} className='py-3 px-5  w-[100%]  sm:w-[40%] bg-slate-200' name='age' id='firstname' placeholder='Age' type="text" value={personalData.age} />
           <div data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200" className=' w-[100%] sm:w-[40%] relative'>
                <input  onChange={changeHandler} className='py-3 px-5  w-[100%] bg-slate-200' name='email' id='firstname' placeholder='email' type="email" value={personalData.email} />
                <MdEmail className='absolute scale-150 top-[35%] right-5'></MdEmail>
           </div>

           <div data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200" className='w-[100%] sm:w-[40%] relative'>
                <input onChange={changeHandler} className='py-3 px-5  w-[100%] bg-slate-200' name='mob' id='mob' placeholder='Phone Number' type="text" value={personalData.mob} />
                <BsFillTelephoneFill className='absolute scale-125 top-[35%] right-5'></BsFillTelephoneFill>
           </div>
            
      </div>



      <div className='w-[100%] flex justify-center gap-5 items-center'>
          <button onClick={clickHandler}  className='border-2 border-[#e44747] py-2 px-4 m-3 '>Back</button>
          <Link to={'/second'} ><button onClick={submitHadler} className='text-white bg-[#e44747] hover:bg-[#b12f2f]  py-2 px-4 m-3 '>Next</button></Link>
      </div>

      <div className=' w-[50%] text-center mt-10 scale-125  py-2 px-10 shadow-2xl'>
        <p>Page: 1 out of 6</p>
      </div>
    </div>
  )
}
