import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { IconContext } from 'react-icons';
import profilePic from './../../img/alamgir 2.jpg';
import { FaSkype, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function Navbar() {
  const [sidebar, setSidebar] = useState(true);



  return (
    <div className='fixed-top pb-2'>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div>
          <Link to='#' className='menu-bars text-end'>
            <FaIcons.FaBars onClick={() => setSidebar(!sidebar)} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}> 
          <ul className='nav-menu-items m-0 p-0'>
            
              <li className="profile-pic m-0">
                  <img src={profilePic} alt="profile-pic" className='img-fluid'/>
              </li>
                <Link to="/home" className="nav-link text-white m-0"> 
                    <span className='h6 mx-2 text-white'>
                        <i className="bi bi-house-fill"></i>
                    </span>
                    <span className='nav-header'> HOME</span> 
                  </Link>
                  <Link to="/aboutMe" className="nav-link text-white m-0"> 
                    <span className='h6 mx-2 text-white'>
                        <i className="bi bi-person-circle"></i>
                    </span> 
                    <span className='nav-header'>ABOUT ME</span> 
                  </Link>
                  <Link to="/resume" className="nav-link text-white m-0"> 
                    <span className='mx-2 h6 text-white'>
                        <i className="bi bi-journal-richtext"></i>
                    </span>
                    <span className='nav-header'>RESUME</span>
                  </Link>
                  <Link to="/portfolio" className="nav-link text-white m-0"> 
                    <span className='mx-2 h6 text-white'>
                      <i className="bi bi-briefcase-fill"></i>
                    </span>
                    <span className='nav-header'>PORTFOLIO</span>
                  </Link>
                  <Link to="/blog" className="nav-link text-white m-0"> 
                    <span className='mx-2 h6 text-white'>
                      <i className="bi bi-journal-bookmark-fill"></i>
                    </span>
                    <span className='nav-header'>BLOG</span>
                  </Link>               
                  <Link to="/contact" className="nav-link text-white m-0"> 
                    <span className='mx-2 h6 text-white'>
                      <i className="bi bi-envelope"></i>
                    </span>
                    <span className='nav-header'>CONTACT</span>
                  </Link>
                  
                  <li className='social-link'>
                      <a href='https://join.skype.com/invite/uqCi9Yraaf9u' target='blank' className='mx-3'>
                      <span><FaSkype/></span>
                      </a>
                  </li>
                  
                  <li className='social-link'>
                      <a href='https://www.linkedin.com/in/alamgir8/' target='blank' className='mx-3'>
                          <span><FaLinkedin/></span>
                      </a>
                  </li>
                  <li className='social-link'>
                      <a href='https://github.com/alamgir8' target='blank' className='mx-3'>
                          <span><FaGithub/></span>
                      </a>
                  </li>
                  <li className='social-link'>
                      <a href='https://twitter.com/MAhossain007' target='blank' className='mx-3'>
                          <span><FaTwitter/></span>
                      </a>
                  </li>
               
            </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;
