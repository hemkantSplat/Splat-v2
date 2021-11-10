import React, { useState } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Work from './Pages/Work'
import Studio from './Pages/Studio'
import Reel from './Pages/Reel'
import Carrers from './Pages/Careers'
import Contact from './Pages/Contact'
import ProjectTemplates from './Pages/ProjectTemplates'
import Copyright from './Pages/Copyright'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar'
import ScrollToTop from './Components/ScrollToTop'
import { AnimatePresence } from 'framer-motion'
function App() {
  const [toggleOpen, setToggleOpen] = useState(false)

  const location = useLocation()

  return (
    <>
      <Navbar setToggleOpen={setToggleOpen} toggleOpen={toggleOpen} />
      <Sidebar toggleOpen={toggleOpen} setToggleOpen={setToggleOpen} />
      <ScrollToTop />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/work'>
            <Work />
          </Route>
          <Route exact path='/studio'>
            <Studio />
          </Route>
          <Route exact path='/reels'>
            <Reel />
          </Route>
          <Route exact path='/careers'>
            <Carrers />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/work/:id'>
            <ProjectTemplates />
          </Route>
          <Route exact path='/copyright'>
            <Copyright />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default App
