
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AboutMe from "./components/AboutMe/AboutMe";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact"
import Blog from "./components/Blog/Blog";
import Particles from 'react-particles-js';

function App() {
  return (
      <Router>
      <Particles
        style={{ position: "absolute" }}
        height="95%"
        width="95%"
        params={{
	    "particles": {
            "color": {
              "value": "#000000"
            },
            "line_linked": {
              "color": {
                "value": "#034444"
              }
            },
	        "number": {
	            "value": 30
	        },
	        "size": {
	            "value": 1
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} 
      />
          <Switch>
              <Route path='/home'>
                  <Home/>
                </Route>
                <Route exact path='/'>
                    <Home/>
                </Route>
              <Route path='/aboutMe'>
                  <AboutMe/>
              </Route>
              <Route path='/resume'>
                  <Resume/>
              </Route>
              <Route path='/portfolio'>
                  <Portfolio/>
              </Route>
              <Route path='/blog'>
                  <Blog/>
              </Route>
              <Route path='/contact'>
                  <Contact/>
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
