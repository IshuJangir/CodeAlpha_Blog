import React, { useEffect, useRef } from 'react'
import hrclogo from '../assets/hrclogo.png'
import { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';




export default function Download({completeData,fifthhave,fourthhave,thirdhave}) {

  const pdfRef = useRef();


  const[loader,setLoader]=useState(false);

  const proData = completeData.projectDetails;
  const proResult=[];

  function proConvert(proData){
    for(var i in proData)
      if (proData[i].name !=='') {
        proResult.push(proData[i]);
      }
      else{
        break;
      }
      return proResult;
  }
  proConvert(proData);


  const internData = completeData.internshipDetails;
  const internResult=[];

  function internconvert(internData){
    for(var i in internData)
      if (internData[i].name !=='') {
        internResult.push(internData[i]);
      }
      else{
        break;
      }
      return internResult;
  }
  internconvert(internData);


  const posData = completeData.positionDetails;
  const posResult=[];

  function posConvert(posData){
    for(var i in posData)
      if (posData[i].name !=='') {
        posResult.push(posData[i]);
      }
      else{
        break;
      }
      return posResult;
  }
  posConvert(posData);



  const dataArray = Object.values(completeData.fullData.skills)
  console.log("Ye array kon print karega",dataArray);

  const downloadPdf =()=>{
    setLoader(true)
    const input = pdfRef.current;
    html2canvas(input).then((canvas)=>{
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p','mm','a4',true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth/imgWidth,pdfHeight/imgHeight);
      const imgX = (pdfWidth-imgWidth*ratio)/2;
      const imgY = 30;
      pdf.addImage(imgData,'PNG',imgX,imgY,imgWidth*ratio,imgHeight*ratio);
      pdf.save(`${completeData.personalData.firstname} ${completeData.personalData.lastname}_CV.pdf`);
      setLoader(false);
    })
  }



  return (
    <div className='flex flex-col items-center'>

   
      <div ref={pdfRef}  className='scale-50 w-[200%] pdf sm:scale-100 flex flex-col items-center sm:w-8/12 mt-5 bg-gray-100 font-serif'>

            <div className='flex  w-[95%]  h-[50px] relative '>
                  <div className='flex gap-1 w-[100%] mt-3 justify-center  text-3xl'>
                      <p>{completeData.personalData.firstname}</p>
                      <p>{completeData.personalData.lastname}</p>
                  </div>

                  <div className='absolute right-0'>
                    <img className='w-14 mt-1' src={hrclogo} alt="" />
                  </div>
            </div>


            <div className='flex gap-1 text-xs justify-center items-center  h-[50px]'>
                  <p className='uppercase'>{completeData.personalData.gender} |</p>
                  <p>{completeData.personalData.age}YRS |</p>
                  <p>{completeData.personalData.email} |</p>
                  <p>+91-{completeData.personalData.mob}</p>
            </div>

            <div className=' flex items-center p-3 w-[95%] border uppercase border-black h-10 bg-[#d7d7d7]'>
              <p>education</p>
            </div>

            <table className='border border-black mt-3 mb-3 w-[95%] '>

                  <thead>
                  <tr className='border border-black'>
                    <th className='pb-2'>Name of Course</th>
                    <th className='pb-2'>Year</th>
                    <th className='pb-2'>University/Institute</th>
                    <th className='pb-2'>Marks</th>
                  </tr>
                  </thead>


                  <tbody>
                  <tr className='border  border-black'>
                    <td className='pb-2'>{completeData.eduData.department}</td>
                    <td className='pb-2' >{completeData.eduData.collPass}</td>
                    <td className='pb-2' >{completeData.eduData.college}</td>
                    <td className='pb-2' >{completeData.eduData.collMarks}</td>
                  </tr>
                  <tr className='border border-black'>
                    <td className='pb-2' >{completeData.eduData.tweboard}</td>
                    <td className='pb-2' >{completeData.eduData.twePass}</td>
                    <td className='pb-2' >{completeData.eduData.tweSchool}</td>
                    <td className='pb-2' >{completeData.eduData.tweMarks}</td>
                  </tr>
                  <tr>
                    <td className='pb-2' >{completeData.eduData.tenboard}</td>
                    <td className='pb-2' >{completeData.eduData.tenPass}</td>
                    <td className='pb-2' >{completeData.eduData.tenSchool}</td>
                    <td className='pb-2' >{completeData.eduData.tenMarks}</td>
                  </tr>
                  </tbody>


            </table>




            { thirdhave &&
              <div className=' flex items-center p-3 w-[95%] border uppercase border-black h-10 bg-[#d7d7d7]'>
              <p>Academic projects</p>
            </div>
            }


            { thirdhave &&
              <div className='w-full flex flex-col items-center mt-3 mb-3 gap-2'>
              {proResult.map((project, index) => { 
                  return (
                    <div className='w-[95%]' key={index}>
                      <h3 className='uppercase font-bold'>● {proResult[index].name}:</h3>
                      <p className='ml-10'>{proResult[index].details}</p>
                    </div>
                  );
              })}
              </div>
            }
            


            { fourthhave &&
              <div className=' flex items-center p-3 w-[95%] border uppercase border-black h-10 bg-[#d7d7d7]'>
              <p>internship</p>
            </div>
            }

            { fourthhave &&
              <div className='w-full flex flex-col items-center mt-3 mb-3 gap-2'>
              {internResult.map((project, index) => { 
                  return (
                    <div className='w-[95%]' key={index}>
                      <h3 className='uppercase font-bold'>● {internResult[index].name}:</h3>
                      <p className='ml-10'>{internResult[index].details}</p>
                    </div>
                  );
              })}
              </div>
            }
            


            { fifthhave &&
              <div className=' flex items-center p-3 w-[95%] border uppercase border-black h-10 bg-[#d7d7d7]'>
              <p>Position of Responsibility</p>
              </div>
            }

            { fifthhave &&
              <div className='w-full flex flex-col items-center mt-3 mb-3 gap-2'>
              {posResult.map((project, index) => { 
                  return (
                    <div className='w-[95%]' key={index}>
                      <h3 className='uppercase font-bold'>● {posResult[index].name}:</h3>
                      <p className='ml-10'>{posResult[index].details}</p>
                    </div>
                  );
              })}
              </div>
            }


            <div className=' flex items-center p-3 w-[95%] border uppercase border-black h-10 bg-[#d7d7d7]'>
              <p>other information</p>
            </div>

            <div className='w-[95%] mt-3'>
              <p>● GitHub Link: <a target='_blank' className='text-[#477fff]' href={completeData.fullData.links.github}>{completeData.fullData.links.github}</a></p>
              <p>● LinkedIn: <a target='_blank' className='text-[#477fff]' href={completeData.fullData.links.linkedIn}>{completeData.fullData.links.linkedIn}</a></p>
            </div>

            <p className='uppercase font-bold w-[95%] mt-5'>Technical skills:</p>
            
            <div className='w-full flex flex-col items-center mt-3 mb-3 gap-2'>
              {dataArray.map((skill,index) => { 
                  if(dataArray[index].name!==''){

                    return (
                      <div className='w-[95%]' key={index}>
                        <h3 className='uppercase'>● {dataArray[index].name}</h3>
                      </div>
                    );
                    
                  }
                  
              })}
            </div>







      </div>

      {/* <button  disabled={!(loader===false)} className='text-white bg-[#e44747] hover:bg-[#b12f2f]  py-2 px-4 m-3 '>{
        loader ? (<span>Downloading</span>) : (<Download></Download>)
      }</button> */}

      <button onClick={downloadPdf} className='text-white bg-[#e44747] hover:bg-[#b12f2f]  py-2 px-4 m-3 ' >
        {loader ? (<span>Downloading</span>):(<span>Download</span>)}
      </button>

    </div>
  )
}
