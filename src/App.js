import { useState } from 'react'
import './App.css';
import { Switch, Route, useLocation } from 'react-router-dom'
import Home from './pages';
import AboutPage from './pages/about';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import ResumePage from './pages/resume';
import Gemastik2021 from './pages/Projects/Gemastik2021';
import { AnimatePresence } from 'framer-motion'

function App() {

  const [ isOpen, setIsOpen ] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const location = useLocation();

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {/* initial={false} */}
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={AboutPage} exact />
          <Route path="/resume" component={ResumePage} exact />
          <Route path="/2021-Twing" component={Gemastik2021} exact />
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
