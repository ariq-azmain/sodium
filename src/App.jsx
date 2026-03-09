import { BrowserRouter, Routes, Route } from 'react-router-dom'

import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'

import {
  Home,
  About,
  Events,
  Achievement
} from './pages'

import { StarsCanvas } from './canvas'

import NavBar from './layouts/NavBar.jsx'
import Footer from './layouts/Footer.jsx'
import BG from './layouts/BG.jsx'

import { Alert } from './components'

gsap.registerPlugin(SplitText, ScrollTrigger)

const App = () => {
  return (
    <BrowserRouter>
      <BG />
      <NavBar />
      <Alert />
      <div className="mt-[200px]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/achievement" element={<Achievement />} />
      </Routes>
      </div>
      {
//         <StarsCanvas color="#484eff" rotX={10} rotY={15} />
//         <StarsCanvas color="#dd69e0" rotX={11} rotY={11} />
      }
      <br />
      <br />
      <br />
      <Footer />
    </BrowserRouter>
  )
}

export default App