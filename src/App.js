import { useState } from 'react'
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages';
import AboutPage from './pages/about';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import ResumePage from './pages/resume';
import Gemastik2021 from './pages/Projects/Gemastik2021';
import { AnimatePresence } from 'framer-motion'
import NotFound from './pages/NotFound';

function App() {

  const [ $isOpen, setIsOpen ] = useState(false)

    const toggle = () => {
      setIsOpen(!$isOpen)
    }

    const location = useLocation();

  return (
    <>
      <Sidebar $isOpen={$isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {/* initial={false} */}
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} exact> </Route>
          <Route path="/about" element={<AboutPage />} exact> </Route>
          <Route path="/resume" element={<ResumePage />} exact> </Route>
          <Route path="/2021-Twing" element={<Gemastik2021 />} exact> </Route>
          <Route path="*" element={<NotFound />}> </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
