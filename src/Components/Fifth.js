import React, { useState, useEffect } from "react";
import { GrWorkshop } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Fifth({handlePositionData,fifthhave,setFifthhave}) {
  const navigate = useNavigate();


  const inputArr = [
    {
      type: "text",
      id: 1,
      value: "",
    },
  ];

  const [arr, setArr] = useState(inputArr);
  const [positionDetails, setpositionDetails] = useState(
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
  
    setpositionDetails((prev) => [
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
    setpositionDetails((prev) => {
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
    setpositionDetails((prev) =>
      prev.map((project, index) =>
        index === 0 ? { ...project, [name]: type === "checkbox" ? checked : value } : project
      )
    );
  }

  function submitHandler() {
    console.log(positionDetails);
    handlePositionData(positionDetails)
  }

  useEffect(() => {
    const Value = localStorage.getItem('fifthhave');
    if (Value) {
      setFifthhave(JSON.parse(Value));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('fifthhave', JSON.stringify(fifthhave));
  }, [fifthhave]);

  

  useEffect(() => {
    const savedValue = localStorage.getItem('positionDetails');
    if (savedValue) {
      setpositionDetails(JSON.parse(savedValue));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('positionDetails', JSON.stringify(positionDetails));
  }, [positionDetails]);

  return (
    <div className="flex relative flex-col justify-center items-center mt-5">
      <p className="text-3xl gap-3 flex justify-center items-center text-center">
      Position of Responsibility  <GrWorkshop className="mt-1" />
      </p>

      {!fifthhave && (
        <div className="flex mt-5 mb-5 gap-5 justify-center items-center">
          <p>have any?</p>
          <button
            className="border border-slate-400 px-4 py-2 rounded-md"
            onClick={() => {
              setFifthhave(true);
            }}
          >
            Yes
          </button>
        </div>
      )}

{fifthhave && (
  <div className="flex w-[100%] flex-col justify-center items-center mt-5 gap-9 p-3">
    {arr.map((item, i) => (
      <div
        className="flex w-[100%] flex-col justify-center items-center mt-5 gap-9 p-3"
        key={i}
      >
        <p className="w-[60%] text-2xl">Position {i + 1}:</p>
        <input
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="100"
          onChange={(e) => handleChange(e, i)}
          className="py-3 px-5 bg-slate-200 w-[60%]"
          name="name"
          id={i}
          placeholder="Position Name"
          type="text"
          value={positionDetails && positionDetails[i] ? positionDetails[i].name : ''}
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
          placeholder="Enter Position details here"
          value={positionDetails && positionDetails[i] ? positionDetails[i].details : ''}
        ></textarea>
      </div>
    ))}
  </div>
)}


      {fifthhave && (
        <button
          onClick={addInput}
          className="border mt-5 mb-5 border-slate-400 px-4 py-2 rounded-md"
        >
          I have more Responsibilities to add
        </button>
      )}
      <div className="w-[100%] flex justify-center gap-5 items-center">
        <button
          onClick={clickHandler}
          className="border-2 border-[#e44747] py-2 px-4 m-3 "
        >
          Back
        </button>
        {!fifthhave && (
          <Link to={"/sixth"}>
            <button
              onClick={submitHandler}
              className="text-white bg-[#e44747] hover:bg-[#b12f2f]  py-2 px-4 m-3 "
            >
              Skip and Next
            </button>
          </Link>
        )}
        {fifthhave && (
          <Link to={"/sixth"}>
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
        <p>Page: 5 out of 6</p>
      </div>
    </div>
  );
}
