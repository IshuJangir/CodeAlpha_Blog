import React from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Fashion from './Components/Fashion'
import Food from './Components/Food'
import Meditate from './Components/Meditate'
import Social from './Components/Social'
import Tech from './Components/Tech'
import Travel from './Components/Travel'
import Fpage1 from './Components/Fpage1'
import Fpage2 from './Components/Fpage2'
import Fpage3 from './Components/Fpage3'
import Mpage1 from './Components/Mpage1'
import Mpage2 from './Components/Mpage2'
import Spage1 from './Components/Spage1'
import Spage2 from './Components/Spage2'
import Tpage1 from './Components/Tpage1'
import Tpage2 from './Components/Tpage2'
import Tpage3 from './Components/Tpage3'
import Fopage1 from './Components/Fopage1'
import Fopage2 from './Components/Fopage2'
import Trpage1 from './Components/Trpage1'
import Trpage2 from './Components/Trpage2'
import Trpage3 from './Components/Trpage3'


export default function App() {
  return (
    <div className='scroll-smooth'>

      <Navbar></Navbar>

      <Routes>

        <Route path='/' Component={Home} ></Route>
        <Route path='/fashion' Component={Fashion} ></Route>
        <Route path='/tech' Component={Tech} ></Route>
        <Route path='/food' Component={Food} ></Route>
        <Route path='/travel' Component={Travel} ></Route>
        <Route path='/meditate' Component={Meditate} ></Route>
        <Route path='/social' Component={Social} ></Route>
        <Route path='/fpage1' Component={Fpage1} ></Route>
        <Route path='/fpage2' Component={Fpage2} ></Route>
        <Route path='/fpage3' Component={Fpage3} ></Route>
        <Route path='/mpage1' Component={Mpage1} ></Route>
        <Route path='/mpage2' Component={Mpage2} ></Route>
        <Route path='/spage1' Component={Spage1} ></Route>
        <Route path='/spage2' Component={Spage2} ></Route>
        <Route path='/tpage1' Component={Tpage1} ></Route>
        <Route path='/tpage2' Component={Tpage2} ></Route>
        <Route path='/tpage3' Component={Tpage3} ></Route>
        <Route path='/fopage1' Component={Fopage1} ></Route>
        <Route path='/fopage2' Component={Fopage2} ></Route>
        <Route path='/trpage1' Component={Trpage1} ></Route>
        <Route path='/trpage2' Component={Trpage2} ></Route>
        <Route path='/trpage3' Component={Trpage3} ></Route>


      </Routes>
      
    </div>
  )
}
