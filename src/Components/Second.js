import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {RiGraduationCapFill} from 'react-icons/ri'
import {FaUserGraduate} from 'react-icons/fa'
import { useEffect } from 'react';

export default function Second({ handleEduData }) {

    const navigate = useNavigate();


      function clickHandler(){
            navigate(-1);
      }

  const[eduData,seteduData]=useState({
    department:"",
    college:"",
    collMarks:"",
    collPass:"",
    tweboard:"",
    tweSchool:"",
    tweMarks:"",
    twePass:"",
    tenboard:"",
    tenSchool:"",
    tenMarks:"",
    tenPass:""
  })

  function changeHandler(event) {
    const {name, value, checked, type} = event.target;
    seteduData( (prev) => ({...prev, [name]:type === "checkbox" ? checked: value}) );
  }


  function submitHadler(){
    console.log(eduData)
    handleEduData(eduData)
  }


  useEffect(() => {
    const savedValue = localStorage.getItem('eduData');
    if (eduData) {
      seteduData(JSON.parse(savedValue));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('eduData', JSON.stringify(eduData));
  }, [eduData]);



  return (
    <div className='flex relative flex-col justify-center items-center  mt-5'>
      <p className='text-3xl flex justify-center items-center gap-3 text-center'>Educational Details  <FaUserGraduate></FaUserGraduate> </p>

      <div className='flex  flex-wrap justify-center items-center mt-5 gap-9 p-3'>
        <p className='w-[100%] text-4xl'>UG details</p>
            <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100" className='relative w-[100%] sm:w-[25%] '>
                    <input onChange={changeHandler} className='py-3 px-5 w-[100%]  sm:w-[100%] bg-slate-200' name='department' id='department' placeholder='Department' type="text" value={eduData.department} />
                    <RiGraduationCapFill className='absolute top-4 right-4 scale-125'></RiGraduationCapFill>
            </div>
            <input data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" onChange={changeHandler} className='py-3 px-5 w-[100%]  sm:w-[25%] bg-slate-200' name='college' id='college' placeholder='University/Institute' type="text" value={eduData.college} />
            <input data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400" onChange={changeHandler} className='py-3 px-5 w-[100%]  sm:w-[20%] bg-slate-200' name='collMarks' id='collMarks' placeholder='marks/cgpa obtained' type="text" value={eduData.collMarks} />
            <input data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600" onChange={changeHandler} className='py-3 px-5 w-[100%]  sm:w-[20%] bg-slate-200' name='collPass' id='collPass' placeholder='passing year' type="text" value={eduData.collPass} />


        <p className='w-[100%] text-4xl'>XII<sup>th</sup> details</p>
            <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100" className='relative w-[100%] sm:w-[25%] '>
                    <input onChange={changeHandler} className='py-3 px-5 w-[100%]  sm:w-[100%] bg-slate-200' name='tweboard' id='tweboard' placeholder='Board name' type="text" value={eduData.tweboard} />
                    <RiGraduationCapFill className='absolute top-4 right-4 scale-125'></RiGraduationCapFill>
            </div>
            <input data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" onChange={changeHandler} className='py-3 px-5 w-[100%]  sm:w-[25%] bg-slate-200' name='tweSchool' id='tweSchool' placeholder='School name' type="text" value={eduData.tweSchool} />
            <input data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400" onChange={changeHandler} className='py-3 px-5 w-[100%]  sm:w-[20%] bg-slate-200' name='tweMarks' id='tweMarks' placeholder='marks/cgpa obtained' type="text" value={eduData.tweMarks} />
            <input data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600" onChange={changeHandler} className='py-3 px-5 w-[100%]  sm:w-[20%] bg-slate-200' name='twePass' id='twePass' placeholder='passing year' type="text" value={eduData.twePass} />


        <p className='w-[100%] text-4xl'>X<sup>th</sup> details</p>
            <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100" className='relative w-[100%] sm:w-[25%] '>
                    <input onChange={changeHandler} className='py-3 px-5 w-[100%]  sm:w-[100%] bg-slate-200' name='tenboard' id='tenboard' placeholder='Board name' type="text" value={eduData.tenboard} />
                    <RiGraduationCapFill className='absolute top-4 right-4 scale-125'></RiGraduationCapFill>
            </div>
            <input data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" onChange={changeHandler} className='py-3 px-5 w-[100%]  sm:w-[25%] bg-slate-200' name='tenSchool' id='tenSchool' placeholder='School name' type="text" value={eduData.tenSchool} />
            <input data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400" onChange={changeHandler} className='py-3 px-5 w-[100%]  sm:w-[20%] bg-slate-200' name='tenMarks' id='tenMarks' placeholder='marks/cgpa obtained' type="text" value={eduData.tenMarks} />
            <input data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600" onChange={changeHandler} className='py-3 px-5 w-[100%]  sm:w-[20%] bg-slate-200' name='tenPass' id='tenPass' placeholder='passing year' type="text" value={eduData.tenPass} />
            
      </div>


      <div className='w-[100%] flex justify-center gap-5 items-center'>
          <button onClick={clickHandler}  className='border-2 border-[#e44747] py-2 px-4 m-3 '>Back</button>
          <Link to={'/third'} ><button onClick={submitHadler} className='text-white bg-[#e44747] hover:bg-[#b12f2f]  py-2 px-4 m-3 '>Next</button></Link>
      </div>

      <div className=' w-[50%] text-center mt-10 scale-125  py-2 px-10 shadow-2xl'>
        <p>Page: 2 out of 6</p>
      </div>
    </div>
  )
}
