import React, { useState, useEffect } from "react";
import { AiOutlineIdcard } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Fourth({handleInternshipData,fourthhave,setFourthhave}) {
  const navigate = useNavigate();

  const Inputarr = [
    {
      type: "text",
      id: 1,
      value: "",
    },
  ];

  const [arr, setArr] = useState(Inputarr);
  const [internshipDetails, setInternshipDetails] = useState(
    Array(arr.length).fill({
      name: "",
      details: "",
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
  
    setInternshipDetails((prev) => [
      ...(prev || []), // Initialize with an empty array if prevDetails is undefined
      {
        name: "",
        details: "",
      },
    ]);
  };

  const handleChange = (e, index) => {
    e.preventDefault();

    const { name, value } = e.target;
    setInternshipDetails((prev) => {
      const updatedDetails = [...prev];
      updatedDetails[index] = {
        ...updatedDetails[index],
        [name]: value,
      };
      return updatedDetails;
    });
  };

  function clickHandler() {
    navigate(-1);
  }

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setInternshipDetails((prev) =>
      prev.map((project, index) =>
        index === 0 ? { ...project, [name]: type === "checkbox" ? checked : value } : project
      )
    );
  }

  function submitHandler() {
    console.log(internshipDetails);
    handleInternshipData(internshipDetails)
  }

  useEffect(() => {
    const Value = localStorage.getItem('fourthhave');
    if (Value) {
      setFourthhave(JSON.parse(Value));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('fourthhave', JSON.stringify(fourthhave));
  }, [fourthhave]);

  

  useEffect(() => {
    const savedValue = localStorage.getItem('internshipDetails');
    if (savedValue) {
      setInternshipDetails(JSON.parse(savedValue));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('internshipDetails', JSON.stringify(internshipDetails));
  }, [internshipDetails]);

  return (
    <div className="flex relative flex-col justify-center items-center mt-5">
      <p className="text-3xl gap-3 flex justify-center items-center text-center">
        Internship <AiOutlineIdcard className="mt-1" />
      </p>

      {!fourthhave && (
        <div className="flex mt-5 mb-5 gap-5 justify-center items-center">
          <p>Do You have any Internship?</p>
          <button
            className="border border-slate-400 px-4 py-2 rounded-md"
            onClick={() => {
              setFourthhave(true);
            }}
          >
            Yes
          </button>
        </div>
      )}

{fourthhave && (
  <div className="flex w-[100%] flex-col justify-center items-center mt-5 gap-9 p-3">
    {arr.map((item, i) => (
      <div
        className="flex w-[100%] flex-col justify-center items-center mt-5 gap-9 p-3"
        key={i}
      >
        <p className="w-[60%] text-2xl">Internship {i + 1}:</p>
        <input
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="100"
          onChange={(e) => handleChange(e, i)}
          className="py-3 px-5 bg-slate-200 w-[60%]"
          name="name"
          id={i}
          placeholder="Name"
          type="text"
          value={internshipDetails && internshipDetails[i] ? internshipDetails[i].name : ''}
        />
        <textarea
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="300"
          onChange={(e) => handleChange(e, i)}
          className="py-3 px-5 bg-slate-200 w-[60%]"
          name="details"
          id={i}
          cols="30"
          rows="10"
          placeholder="Enter Internship details here"
          value={internshipDetails && internshipDetails[i] ? internshipDetails[i].details : ''}
        ></textarea>
      </div>
    ))}
  </div>
)}


      {fourthhave && (
        <button
          onClick={addInput}
          className="border mt-5 mb-5 border-slate-400 px-4 py-2 rounded-md"
        >
          I have more Internship
        </button>
      )}
      <div className="w-[100%] flex justify-center gap-5 items-center">
        <button
          onClick={clickHandler}
          className="border-2 border-[#e44747] py-2 px-4 m-3 "
        >
          Back
        </button>
        {!fourthhave && (
          <Link to={"/fifth"}>
            <button
              onClick={submitHandler}
              className="text-white bg-[#e44747] hover:bg-[#b12f2f]  py-2 px-4 m-3 "
            >
              Skip and Next
            </button>
          </Link>
        )}
        {fourthhave && (
          <Link to={"/fifth"}>
            <button
              onClick={submitHandler}
              className="text-white bg-[#e44747] hover:bg-[#b12f2f]  py-2 px-4 m-3 "
            >
              Next
            </button>
          </Link>
        )}
      </div>

      <div className=" w-[50%] text-center mt-10 scale-125  py-2 px-10 shadow-2xl">
        <p>Page: 4 out of 6</p>
      </div>
    </div>
  );
}
