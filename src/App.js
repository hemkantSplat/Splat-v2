import React, { useState } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Work from "./Pages/Work";
import Studio from "./Pages/Studio";
import Reel from "./Pages/Reel";
import Team from "./Pages/Team";
import Carrers from "./Pages/Careers";
import Contact from "./Pages/Contact";
import ProjectTemplates from "./Pages/ProjectTemplates";
import Copyright from "./Pages/Copyright";
import Footer from "./Components/Footer";

import Sidebar from "./Components/Sidebar";
import ScrollToTop from "./Components/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import ReactGA from "react-ga";
import RouteChangeTracker from "./Components/RouteChangeTracker";
import MediaCoverage from "./Pages/Media-Coverage";

function App() {
  const [toggleOpen, setToggleOpen] = useState(false);
  const location = useLocation();
  // const [loader, setLoader] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => setLoader(false), 8000)
  // }, [loader])

  const TRACKING_ID = "UA-101088288-2"; // YOUR_OWN_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);

  return (
    <>
      <RouteChangeTracker />
      <div className="main-wrapper"></div>
      <>
        {/* bg circle like monopo */}
        {/* <div className='bg-wrapper'></div> */}
        <Navbar setToggleOpen={setToggleOpen} toggleOpen={toggleOpen} />
        <Sidebar toggleOpen={toggleOpen} setToggleOpen={setToggleOpen} />
        <ScrollToTop />
        <AnimatePresence
          exitBeforeEnter
          // onExitComplete={() => setLoader(true)}
        >
          <Switch location={location} key={location.pathname}>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/work">
              <Work />
            </Route>
            <Route exact path="/studio">
              <Studio />
            </Route>
            <Route exact path="/reels">
              <Reel />
            </Route>
            <Route exact path="/team">
              <Team />
            </Route>
            <Route exact path="/careers">
              <Carrers />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/work/:id">
              <ProjectTemplates />
            </Route>
            <Route exact path="/copyright">
              <Copyright />
            </Route>
            <Route exact path="/signature">
              <Redirect to="/signature/index.html"></Redirect>
            </Route>
            <Route exact path="/media-coverage">
              <MediaCoverage />
            </Route>
          </Switch>
        </AnimatePresence>
        <Footer />
      </>
    </>
  );
}

export default App;
