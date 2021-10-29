import React from 'react'
import { Route, Switch } from 'react-router-dom'
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

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <div>
          <Route path='/work'>
            <Work />
          </Route>
          <Route path='/studio'>
            <Studio />
          </Route>
          <Route path='/reels'>
            <Reel />
          </Route>
          <Route path='/careers'>
            <Carrers />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/work/:id'>
            <ProjectTemplates />
          </Route>
          <Route path='/copyright'>
            <Copyright />
          </Route>
          <Footer />
        </div>
      </Switch>
    </>
  )
}

export default App
