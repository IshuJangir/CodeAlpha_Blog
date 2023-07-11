import React, { useState } from "react";
import { HiDocumentPlus } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {BsGithub,BsLinkedin} from 'react-icons/bs'

export default function Sixth({handleFData}) {
  const navigate = useNavigate();

  const [links, setLinks] = useState({
    github: "",
    linkedIn: "",
  });

  const inputArray = [
    {
      type: "text",
      id: 1,
      value: "",
    },
  ];

  const [arr, setArr] = useState(inputArray);
  const [skills, setSkills] = useState(
    Array(arr.length).fill({
      name: "",
    })
  );

  const addInput = () => {
    setArr((prevArr) => [
      ...prevArr,
      {
        type: "text",
        value: "",
      },
    ]);

    setSkills((prevSkills) => [
      ...(prevSkills || []),
      {
        name: "",
      },
    ]);
  };

  const handleChange = (e, index) => {
    e.preventDefault();

    const { name, value } = e.target;
    setSkills((prevSkills) => {
      const updatedSkills = [...prevSkills];
      updatedSkills[index] = {
        ...updatedSkills[index],
        [name]: value,
      };
      return updatedSkills;
    });
  };

  function clickHandler() {
    navigate(-1);
  }

  function changeHandler(event, fieldName) {
    const { value } = event.target;
    setLinks((prevLinks) => ({
      ...prevLinks,
      [fieldName]: value,
    }));
  }

  const bothData={
    links,skills
  }

  function submitHandler() {
    console.log(bothData);
    handleFData(bothData);
  }

  useEffect(() => {
    const Value = localStorage.getItem('links');
    if (Value) {
      setLinks(JSON.parse(Value));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('links', JSON.stringify(links));
  }, [links]);

  useEffect(() => {
    const savedValue = localStorage.getItem('skills');
    if (skills) {
      setSkills(JSON.parse(savedValue));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('skills', JSON.stringify(skills));
  }, [skills]);

  return (
    <div className="flex relative flex-col justify-center items-center mt-5">
      <p className="text-3xl flex justify-center items-center gap-3 text-center">
        Other Details 
        <HiDocumentPlus />
      </p>
      <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" className=' w-[100%] sm:w-[40%] relative'>
      <input
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="200"
        className="py-3 relative px-5 w-[100%] mt-5 bg-slate-200"
        name="linkedIn"
        id="linkedIn"
        value={links.github}
        placeholder="Github link"
        type="text"
        onChange={(e) => changeHandler(e, "github")}
      />
      <BsGithub className='absolute scale-150 top-[50%] right-5'></BsGithub>
      </div>


      <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" className=' w-[100%] sm:w-[40%] relative'>
      <input
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="200"
        className="py-3 relative px-5 w-[100%] mt-5 bg-slate-200"
        name="linkedIn"
        id="linkedIn"
        value={links.linkedIn}
        placeholder="LinkedIn"
        type="text"
        onChange={(e) => changeHandler(e, "linkedIn")}
      />
                <BsLinkedin className='absolute scale-150 top-[50%] right-5'></BsLinkedin>
      </div>






      <div className="flex flex-col w-[60%] justify-start mt-5 text-xl">
        <p className="flex items-center">
          Skills:
          <span className="text-sm ml-2 text-slate-400">
            you can add Technology/Language you know in the skill Section
          </span>
        </p>
      </div>
      

      {
        arr.map((item,i)=>{
            return(
              <input
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
            onChange={(e) => handleChange(e, i)}
            className="py-3 px-5 bg-slate-200 w-[30%] mt-5 "
            name="name"
            id={i}
            placeholder="Skill"
            type="text"
            value={skills[i].name}
            key={i}
            
            /> 
            )
        })
      }



      <button
        onClick={addInput}
        className="border mt-5 mb-5 border-slate-400 px-4 py-2 rounded-md"
      >
        I have more skill to add
      </button>

      <div className="w-[100%] flex justify-center mt-5 gap-5 items-center">
        <button
          onClick={clickHandler}
          className="border-2 border-[#e44747] py-2 px-4 m-3 "
        >
          Back
        </button>
        <Link to={"/download"}>
          <button
            onClick={submitHandler}
            className="text-white bg-[#e44747] hover:bg-[#b12f2f]  py-2 px-4 m-3 "
          >
            Submit and Download
          </button>
        </Link>
      </div>

      <div className=" w-[50%] text-center mt-10 scale-125  py-2 px-10 shadow-2xl">
        <p>Page: 6 out of 6</p>
      </div>
    </div>
  );
}
