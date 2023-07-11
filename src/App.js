import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import First from './Components/First'
import Second from './Components/Second'
import Third from './Components/Third'
import Fourth from './Components/Fourth'
import Fifth from './Components/Fifth'
import Sixth from './Components/Sixth'
import Download from './Components/Download'
import Nopage from './Components/Nopage'


export default function App() {

  const[rate,setRate]=useState(false)

  const[thirdhave,setThirdhave]=useState(false);
  const[fourthhave,setFourthhave]=useState(false);
  const[fifthhave,setFifthhave]=useState(false);


  //first lifting up

  const [personalData, setPersonalData] = useState({});

  const handlePersonalData = (data) => {
    setPersonalData(data);
  };


  // //second lifting up
  const[eduData,seteduData]=useState({});

  const handleEduData = (data) => {
    seteduData(data);
  };

  //third lifting up

  const [projectDetails, setProjectDetails] = useState({});

  const handleProjectData = (data) => {
    setProjectDetails(data);
  };

  //fourth lifting up

  const [internshipDetails, setInternshipDetails] = useState({})

  const handleInternshipData = (data) => {
    setInternshipDetails(data);
  };

  //fifth lifting up

  const [positionDetails, setpositionDetails] = useState({})

  const handlePositionData = (data) => {
    setpositionDetails(data);
  };

  //sixth lifting up

  const[fullData,setFullData]=useState({});

  const handleFData = (data) => {
    setFullData(data);
  };

  const completeData={
    personalData,eduData,projectDetails,internshipDetails,positionDetails,fullData
  }


 




  return (
    <div>
      <Navbar rate={rate} setRate={setRate} ></Navbar>
      

      <Routes>
          <Route path='/' element={<Home rate={rate} setRate={setRate}  />} />
          <Route path='/first' element={<First handlePersonalData={handlePersonalData} rate={rate} setRate={setRate} />} />
          <Route path='/second'element={<Second handleEduData={handleEduData}/>} />
          <Route path='/third' element={<Third thirdhave={thirdhave} setThirdhave={setThirdhave} handleProjectData={handleProjectData}/>} />
          <Route path='/fourth' element={<Fourth fourthhave={fourthhave} setFourthhave={setFourthhave} handleInternshipData={handleInternshipData}/>} />
          <Route path='/fifth' element={<Fifth fifthhave={fifthhave} setFifthhave={setFifthhave} handlePositionData={handlePositionData}/>} />
          <Route path='/sixth' element={<Sixth handleFData={handleFData}/>} />
          <Route path='/download'element={<Download thirdhave={thirdhave}  fourthhave={fourthhave}  fifthhave={fifthhave} completeData={completeData}/>} />
          <Route path='*' Component={Nopage} />
      </Routes>
    </div>
  )
}
