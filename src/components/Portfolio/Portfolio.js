import React, { useState } from 'react';
import './Portfolio.css';
import projectOne from './../../img/repair-master.png';
import projectTwo from './../../img/super-market.png';
import projectThree from './../../img/10.jpg';
import projectFour from './../../img/fantasy-football.png';
import projectFive from './../../img/fantasy-foot.png';
import projectSix from './../../img/free-pic.png';
import projectSeven from './../../img/hungry-monster.png';
import projectEight from './../../img/Flight Booking.png';
import projectNine from './../../img/8.jpg';
import projectTen from './../../img/panda.png';
import projectEleven from './../../img/phero.png'
import projectTwelve from './../../img/4.jpg'
import Navbar from '../Home/Navbar';
import {FaGithub, FaEye, FaListAlt} from "react-icons/fa";
import Modal from 'react-modal';





const Portfolio = () => {

    const [showRm, setShowRm] = useState(false);
    const handleRm = () => setShowRm(!showRm);
   
    const [showSm, setShowSm] = useState(false);
    const handleSm = () => setShowSm(!showSm);

    const [showFR, setShowFR] = useState(false);
    const handleFastR = () => setShowFR(!showFR);


    const [showFFL, setShowFFL] = useState(false);
    const handleFantasyFL = () => setShowFFL(!showFFL);

    const [showFL, setShowFL] = useState(false);
    const handleFantasyF = () => setShowFL(!showFL);


    const [showFP, setShowFP] = useState(false);
    const handleFreeP = () => setShowFP(!showFP);
   

    const [showHM, setShowHM] = useState(false);
    const handleHungryM = () => setShowHM(!showHM);

    const [showFB, setShowFB] = useState(false);
    const handleFlightB = () => setShowFB(!showFB);

    const [showPF, setShowPF] = useState(false);
    const handlePenguinF = () => setShowPF(!showPF);

    const [showPC, setShowPC] = useState(false);
    const handlePandaC = () => setShowPC(!showPC);

    const [showPH, setShowPH] = useState(false);
    const handlePHero = () => setShowPH(!showPH);


    const [showLB, setShowLB] = useState(false);
    const handleLibrary = () => setShowLB(!showLB);
 

    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          transform             : 'translate(-50%, -50%)'
        }
      };
    
    return (
            <div className='portfolio-section'>         
                  <Navbar/>
                  <div className="portfolio">
                      <div className="p-4">
                          <div className="px-3 py-5">
                            <h1 className="offset-md-2 my-project pb-2 text-primary">MY PROJECTS <span className='icon'><i className="bi bi-briefcase-fill"></i></span></h1>
                                <div className="row">
                          
                                <div className="col-md-5 offset-md-2">
                                      <div className="card p-2 m-3 view">
                                      <img src={projectOne} alt="project-one" className='img-fluid'/>                                              
                                              <div className="mask pt-5">
                                                  <h3>Repair Master </h3>
                                                  <ul>
                                                      <li className='mx-2'>
                                                          <a href="https://repair-master-official.web.app/" target='blank' className="info">Live View <span className='mx-1 h6 text-white'><FaEye/></span></a>
                                                      </li>
                                                      <li className='mx-2'>
                                                          <a href="https://github.com/alamgir8/Repair-Master" target='blank' className="info">Client <span className='mx-1 h6 text-white'><FaGithub/></span></a>
                                                      </li>
                                                      <li className='mx-2'>
                                                          <a href="https://github.com/alamgir8/Repair-master-server" target='blank' className="info">Server <span className='mx-1 h6 text-white'><FaGithub/></span></a>
                                                      </li>
                                                      <li className='mx-2'>
                                                            <button className='info' onClick={handleRm}>
                                                                Feature <span className='mx-1 h6 text-white'><FaListAlt/></span>
                                                           </button>
                                                        <div>
                                                            
                                                        <Modal
                                                            isOpen={showRm}
                                                            onRequestClose={handleRm}
                                                            ariaHideApp={false}
                                                            style={customStyles}
                                                            contentLabel="Example Modal"
                                                            >
                                                            <h2 className='text-center'>Repair Master</h2>
                                                            <div>
                                                                    <ol>
                                                                        <li className='py-1'>
                                                                        On this site I use two main parts, one is Admin Dashboard and the other is Customer Dashboard.                                               
                                                                        </li>
                                                                        <li className='py-1'>
                                                                            On the home page service and the review will show dynamically after add service by admin and add a review by the customer.
                                                                        </li>
                                                                        <li className='py-1'>
                                                                            In the Customer Dashboard, a customer can see his/her ordered service, total order, the current status of that order and can review the service. Customers can add service in his/her order list by complete payment with stripe. But all can be done only when he/she login by google or Facebook or creating a new account.
                                                                        </li>
                                                                        <li className='py-1'>
                                                                            Using Tools:  <b>React, React-Router, Node, MongoDB, Express, Firebase, Bootstrap, Stripe, and other essential elements.</b>
                                                                        </li>
                                                                    </ol>
                                                            </div>
                                                            <div className="text-right info">
                                                                <button className='btn btn-info info text-right h5' onClick={handleRm}>Close</button>
                                                            </div>
                                                            </Modal>
                                                        </div>
                                                        
                                                      </li>
                                                  </ul>
                                              </div>
                                      </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="card p-2 m-3 view">
                                      <img src={projectTwo} alt="project-two" className='img-fluid'/>                                              
                                              <div className="mask pt-5">
                                                  <h3>Fresh Supermarket</h3>
                                                  <ul className='ali'>
                                                      <li className='mx-2'>
                                                          <a href="https://fresh-super-market.web.app/" target='blank' className="info">Live View <span className='mx-1 h6 text-white'><FaEye/></span></a>
                                                      </li>
                                                      <li className='mx-2'>
                                                          <a href="https://github.com/alamgir8/fresh-super-market" target='blank' className="info">Client <span className='mx-1 h6 text-white'><FaGithub/></span></a>
                                                      </li>
                                                      <li className='mx-2'>
                                                          <a href="https://github.com/alamgir8/Fresh-super-market-server" target='blank' className="info">Server <span className='mx-1 h6 text-white'><FaGithub/></span></a>
                                                      </li>
                                                      <li className='mx-2'>
                                                        <button className='info' onClick={handleSm}>
                                                                Feature <span className='mx-1 h6 text-white'><FaListAlt/></span>
                                                           </button>
                                                        <div>
                                                            
                                                        <Modal
                                                            isOpen={showSm}
                                                            onRequestClose={handleSm}
                                                            ariaHideApp={false}
                                                            style={customStyles}
                                                            contentLabel="Example Modal"
                                                            >
                                                            <h2 className='text-center' >Fresh Super Market</h2>
                                                            <div>
                                                                <ol>
                                                                    <li className='py-1'>
                                                                        On this site, anyone who has an account or login access can add a product, delete the product, order the product, and can see his/her ordered total product list.                                               
                                                                    </li>
                                                                    <li className='py-1'>
                                                                        All add products will show dynamically on the home page.
                                                                    </li>
                                                                    <li className='py-1'>
                                                                        Using Tools:  <b>Firebase authentication, React, React-Router, MongoDB, Express Node.js, Bootstrap,and other essential elements.</b>
                                                                    </li>
                                                                </ol>
                                                            </div>
                                                            <div className="text-right info">
                                                                <button className='btn btn-info info text-right h5' onClick={handleSm}>Close</button>
                                                            </div>
                                                            </Modal>
                                                        </div>
                                                            
                                                      </li>
                                                  </ul>
                                              </div>
                                      </div>
                                </div>


                                <div className="col-md-5 offset-md-2">
                                    <div className="card p-2 m-3 view">
                                      <img src={projectThree} alt="project-three" className='img-fluid'/>                                              
                                              <div className="mask pt-5">
                                                  <h3>Fast Rider</h3>
                                                  <ul>
                                                      <li className='mx-2'>
                                                          <a href="https://fast-rider-official.web.app/" target='blank' className="info">Live View <span className='mx-1 h6 text-white'><FaEye/></span></a>
                                                      </li>
                                                      <li className='mx-2'>
                                                          <a href="https://github.com/alamgir8/Fast-rider" target='blank' className="info">Client <span className='mx-1 h6 text-white'><FaGithub/></span></a>
                                                      </li>
                                                      <li className='mx-2'>
                                                            <button className='info' onClick={handleFastR}>
                                                                Feature <span className='mx-1 h6 text-white'><FaListAlt/></span>
                                                           </button>
                                                        <div>
                                                        <Modal
                                                            isOpen={showFR}
                                                            onRequestClose={handleFastR}
                                                            ariaHideApp={false}
                                                            style={customStyles}
                                                            contentLabel="Example Modal"
                                                            >
                                                            <h2 className='text-center'>Fast Rider</h2>
                                                        <div>
                                                                <ol>
                                                                    <li className='py-1'>
                                                                        On this site, customers can choose one option to ride somewhere after login by creating a new account or sign in with Google and Facebook.
                                                                    </li>
                                                                    <li className='py-1'>
                                                                        On this site, showing google Maps by the iframe.
                                                                    </li>
                                                                    <li className='py-1'>
                                                                        Using Tools: <b>React, React-Router, Firebase authentication, Private route, Bootstrap, and other essential elements.</b>
                                                                    </li>
                                                                </ol>
                                                        </div>
                                                        <div className='text-right info'>
                                                            <button className="btn btn-info info text-right h5" onClick={handleFastR}>
                                                            Close
                                                        </button>
                                                        </div>
                                                        </Modal>
                                                       </div>
                                                      </li>
                                                  </ul>
                                              </div>
                                      </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="card p-2 m-3 view">
                                      <img src={projectFour} alt="project-four" className='img-fluid'/>                                              
                                              <div className="mask pt-5">
                                                  <h3>Fantasy Football League</h3>
                                                  <ul>
                                                      <li className='mx-2'>
                                                          <a href="https://fantasy-football-league.netlify.app/" target='blank' className="info">Live View <span className='mx-1 h6 text-white'><FaEye/></span></a>
                                                      </li>
                                                      <li className='mx-2'>
                                                          <a href="https://github.com/alamgir8/Fantasy-football-league" target='blank' className="info">Client <span className='mx-1 h6 text-white'><FaGithub/></span></a>
                                                      </li>
                                                      <li className='mx-2'>
                                                            <button className='info' onClick={handleFantasyFL}>
                                                                Feature <span className='mx-1 h6 text-white'><FaListAlt/></span>
                                                           </button>
                                                        <div>
                                                            <Modal
                                                            isOpen={showFFL}
                                                            onRequestClose={handleFantasyFL}
                                                            ariaHideApp={false}
                                                            style={customStyles}
                                                            contentLabel="Example Modal"
                                                            >
                                                            <h2 className='text-center'>Fantasy Football League</h2>
                                                            <div>
                                                                <ol>
                                                                    <li className='py-1'>
                                                                        Here I use theSportsDB Api for showing data on the home page.
                                                                    </li>
                                                                    <li className='py-1'>
                                                                        Anyone can see specific club information by clicking on the explore button on every club description option.
                                                                    </li>
                                                                    <li className='py-1'>
                                                                        Using Tools:  <b>React, React-Router, Bootstrap, API, and other essential elements.</b>
                                                                    </li>
                                                                </ol>
                                                        </div>
                                                        <div className='text-right info'>
                                                            <button className="btn btn-info info text-right h5" onClick={handleFantasyFL}>
                                                            Close
                                                        </button>
                                                        </div>
                                                        </Modal>
                                                            
                                                       </div>
                                                      </li>
                                                  </ul>
                                              </div>
                                      </div>
                                </div>

                                <div className="col-md-5 offset-md-2">
                                    <div className="card p-2 m-3 view">
                                      <img src={projectFive} alt="project-five" className='img-fluid'/>                                              
                                              <div className="mask pt-5">
                                                  <h3>Fantasy Football</h3>
                                                  <ul>
                                                      <li className='mx-2'>
                                                          <a href="https://fantasyfootballofficial.netlify.app/" target='blank' className="info">Live View <span className='mx-1 h6 text-white'><FaEye/></span></a>
                                                      </li>
                                                      <li className='mx-2'>
                                                          <a href="https://github.com/alamgir8/Fantasy-football" target='blank' className="info">Client <span className='mx-1 h6 text-white'><FaGithub/></span></a>
                                                      </li>
                                                      <li className='mx-2'>
                                                            <button className='info' onClick={handleFantasyF}>
                                                                Feature <span className='mx-1 h6 text-white'><FaListAlt/></span>
                                                           </button>
                                                        <div>
                                                        <Modal
                                                            isOpen={showFL}
                                                            onRequestClose={handleFantasyF}
                                                            ariaHideApp={false}
                                                            style={customStyles}
                                                            contentLabel="Example Modal"
                                                            >
                                                            <h2 className='text-center'>Fantasy Football</h2>
                                                        <div>
                                                                <ol>
                                                                    <li className='py-1'>
                                                                        On this site Customer can add football player for build up their team by clicking on select this player button.
                                                                    </li>
                                                                    <li className='py-1'>
                                                                        All player have specific amount of weekly salary that will also add in customers total cost price after adding this player. A customer can add maximum eleven player in their team list.
                                                                    </li>
                                                                    <li className='py-1'>
                                                                        Using Tools: <b>React, Bootstrap, Css, FakeData for player list and other essential elements</b>
                                                                    </li>
                                                                </ol>
                                                        </div>
                                                        <div className='text-right info'>
                                                            <button className="btn btn-info info text-right h5" onClick={handleFantasyF}>
                                                            Close
                                                        </button>
                                                        </div>
                                                        </Modal>
                                                            
                                                       </div>
                                                      </li>
                                                  </ul>
                                              </div>
                                      </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="card p-2 m-3 view">
                                      <img src={projectSix} alt="project-six" className='img-fluid'/>                                              
                                              <div className="mask pt-5">
                                                  <h3>Free Picture</h3>
                                                  <ul>
                                                      <li className='mx-2'>
                                                          <a href="https://alamgir8.github.io/Assignment/milestone-06/index.html" target='blank' className="info">Live View <span className='mx-1 h6 text-white'><FaEye/></span></a>
                                                      </li>
                                                      <li className='mx-2'>
                                                          <a href="https://github.com/alamgir8/Assignment/tree/main/milestone-06" target='blank' className="info">Client <span className='mx-1 h6 text-white'><FaGithub/></span></a>
                                                      </li>
                                                      <li className='mx-2'>
                                                            <button className='info' onClick={handleFreeP}>
                                                                Feature <span className='mx-1 h6 text-white'><FaListAlt/></span>
                                                           </button>
                                                        <div>
                                                        <Modal
                                                            isOpen={showFP}
                                                            onRequestClose={handleFreeP}
                                                            ariaHideApp={false}
                                                            style={customStyles}
                                                            contentLabel="Example Modal"
                                                            >
                                                            <h2 className='text-center'>Free Picture</h2>
                                                        <div>
                                                            <ol>
                                                                    <li className='py-1'>
                                                                        On this site a user can search or any kind of picture like nature, animal, and search result will show in home page.
                                                                    </li>
                                                                    <li className='py-1'>
                                                                        A user can select some picture for slide show after from search result picture and also can unselect. By clicking create slider a user can see his/her selected picture in slider
                                                                    </li>
                                                                    <li className='py-1'>
                                                                        Using Tools : <b>JavaScript, ES6, Bootstrap, CSS, Api and other essential elements</b>
                                                                    </li>
                                                                </ol>
                                                        </div>
                                                        <div className='text-right info'>
                                                            <button className="btn btn-info info text-right h5" onClick={handleFreeP}>
                                                            Close
                                                        </button>
                                                        </div>
                                                        </Modal>
                                                            
                                                       </div>
                                                      </li>
                                                  </ul>
                                              </div>
                                      </div>
                                </div>

                                <div className="col-md-5 offset-md-2">
                                    <div className="card p-2 m-3 view">
                                      <img src={projectSeven} alt="project-seven" className='img-fluid'/>                                              
                                              <div className="mask pt-5">
                                                  <h3>Hungry Monster</h3>
                                                  <ul>
                                                      <li className='mx-2'>
                                                          <a href="https://alamgir8.github.io/Assignment/milestone-05/index.html" target='blank' className="info">Live View <span className='mx-1 h6 text-white'><FaEye/></span></a>
                                                      </li>
                                                      <li className='mx-2'>
                                                          <a href="https://github.com/alamgir8/Assignment/tree/main/milestone-05" target='blank' className="info">Client <span className='mx-1 h6 text-white'><FaGithub/></span></a>
                                                      </li>
                                                      <li className='mx-2'>
                                                            <button className='info' onClick={handleHungryM}>
                                                                Feature <span className='mx-1 h6 text-white'><FaListAlt/></span>
                                                           </button>
                                                        <div>
                                                        <Modal
                                                            isOpen={showHM}
                                                            onRequestClose={handleHungryM}
                                                            ariaHideApp={false}
                                                            style={customStyles}
                                                            contentLabel="Example Modal"
                                                            >
                                                            <h2 className='text-center'>Hungry Monster</h2>
                                                        <div>
                                                                <ol>
                                                                    <li className='py-1'>
                                                                        On this site user can search for any kind of food by food name or first letter of food. And user can see specific food details by simply click on food picture.
                                                                    </li>
                                                                    <li className='py-1'>
                                                                        All food showing dynamically in home page, calling by food Api.
                                                                    </li>
                                                                    <li className='py-1'>
                                                                            Using Tools : <b>JavaScript, ES6, Bootstrap, CSS, Api and other essential elements</b>
                                                                    </li>
                                                                </ol>
                                                        </div>
                                                        <div className='text-right info'>
                                                            <button className="btn btn-info info text-right h5" onClick={handleHungryM}>
                                                            Close
                                                        </button>
                                                        </div>
                                                        </Modal>
                                                       </div>
                                                      </li>
                                                  </ul>
                                              </div>
                                      </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="card p-2 m-3 view">
                                      <img src={projectEight} alt="project-eight" className='img-fluid'/>                                              
                                              <div className="mask pt-5">
                                                  <h3>Flight Booking</h3>
                                                  <ul>
                                                      <li className='mx-2'>
                                                          <a href="https://alamgir8.github.io/Assignment/milestone-04/index.html" target='blank' className="info">Live View <span className='mx-1 h6 text-white'><FaEye/></span></a>
                                                      </li>
                                                      <li className='mx-2'>
                                                          <a href="https://github.com/alamgir8/Assignment/tree/main/milestone-04" target='blank' className="info">Client <span className='mx-1 h6 text-white'><FaGithub/></span></a>
                                                      </li>
                                                      <li className='mx-2'>
                                                            <button className='info' onClick={handleFlightB}>
                                                                Feature <span className='mx-1 h6 text-white'><FaListAlt/></span>
                                                           </button>
                                                        <div>
                                                        <Modal
                                                            isOpen={showFB}
                                                            onRequestClose={handleFlightB}
                                                            ariaHideApp={false}
                                                            style={customStyles}
                                                            contentLabel="Example Modal"
                                                            >
                                                            <h2 className='text-center'>Flight Booking</h2>
                                                        <div>
                                                            <ol>
                                                                    <li className='py-1'>
                                                                        On this site user can book flight in specific date to going specific destination and can see his/her total cost on booking that flight.
                                                                    </li>
                                                                    <li className='py-1'>
                                                                        A user can book either first class ticket or economy class ticket.
                                                                    </li>
                                                                    <li className='py-1'>
                                                                        Using Tools : <b>JavaScript, ES6, Bootstrap, CSS and other essential elements</b>
                                                                    </li>
                                                                </ol>
                                                        </div>
                                                        <div className='text-right info'>
                                                            <button className="btn btn-info info text-right h5" onClick={handleFlightB}>
                                                            Close
                                                        </button>
                                                        </div>
                                                        </Modal>
                                                           
                                                       </div>
                                                      </li>
                                                  </ul>
                                              </div>
                                      </div>
                                </div>

                                <div className="col-md-5 offset-md-2">
                                    <div className="card p-2 m-3 view">
                                      <img src={projectNine} alt="project-nine" className='img-fluid'/>                                              
                                              <div className="mask pt-5">
                                                  <h3>Penguin Fashion</h3>
                                                  <ul>
                                                      <li className='mx-2'>
                                                          <a href="https://alamgir8.github.io/Assignment/milestone-02/index.html" target='blank' className="info">Live View <span className='mx-1 h6 text-white'><FaEye/></span></a>
                                                      </li>
                                                      <li className='mx-2'>
                                                          <a href="https://github.com/alamgir8/Assignment/tree/main/milestone-02" target='blank' className="info">Client <span className='mx-1 h6 text-white'><FaGithub/></span></a>
                                                      </li>
                                                      <li className='mx-2'>
                                                            <button className='info' onClick={handlePenguinF}>
                                                                Feature <span className='mx-1 h6 text-white'><FaListAlt/></span>
                                                           </button>
                                                        <div>
                                                        <Modal
                                                            isOpen={showPF}
                                                            onRequestClose={handlePenguinF}
                                                            ariaHideApp={false}
                                                            style={customStyles}
                                                            contentLabel="Example Modal"
                                                            >
                                                            <h2 className='text-center'>Penguins Fashion</h2>
                                                        <div>
                                                                <ol>
                                                                    <li className='py-1'>
                                                                        It is a simple e-commerce site. Here use five section for complete this.
                                                                    </li>
                                                                    
                                                                    <li className='py-1'>
                                                                        Using Tools : <b>Bootstrap, CSS and other essential elements</b>
                                                                    </li>
                                                                </ol>
                                                        </div>
                                                        <div className='text-right info'>
                                                            <button className="btn btn-info info text-right h5" onClick={handlePenguinF}>
                                                            Close
                                                        </button>
                                                        </div>
                                                        </Modal>
                                                           
                                                       </div>
                                                      </li>
                                                  </ul>
                                              </div>
                                      </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="card p-2 m-3 view">
                                      <img src={projectTen} alt="project-ten" className='img-fluid'/>                                              
                                              <div className="mask pt-5">
                                                  <h3>Panda E-Commerce</h3>
                                                    <ul>
                                                      <li className='mx-2'>
                                                          <a href="https://alamgir8.github.io/My-Website/panda/index.html" target='blank' className="info">Live View <span className='mx-1 h6 text-white'><FaEye/></span></a>
                                                      </li>
                                                      <li className='mx-2'>
                                                          <a href="https://github.com/alamgir8/My-Website/tree/main/panda" target='blank' className="info">Client <span className='mx-1 h6 text-white'><FaGithub/></span></a>
                                                      </li>
                                                      <li className='mx-2'>
                                                            <button className='info' onClick={handlePandaC}>
                                                                Feature <span className='mx-1 h6 text-white'><FaListAlt/></span>
                                                           </button>
                                                        <div>
                                                        <Modal
                                                            isOpen={showPC}
                                                            onRequestClose={handlePandaC}
                                                            ariaHideApp={false}
                                                            style={customStyles}
                                                            contentLabel="Example Modal"
                                                            >
                                                            <h2 className='text-center'>Panda E-Commerce</h2>
                                                        <div>
                                                            <ol>
                                                                    <li className='py-1'>
                                                                        It is a simple e-commerce site. Here use five section for complete this.
                                                                    </li>
                                                                    
                                                                    <li className='py-1'>
                                                                            Using Tools : <b>Html,Bootstrap, CSS and other essential elements</b>
                                                                    </li>
                                                                </ol>
                                                        </div>
                                                        <div className='text-right info'>
                                                            <button className="btn btn-info info text-right h5" onClick={handlePandaC}>
                                                            Close
                                                        </button>
                                                        </div>
                                                        </Modal>
                                                           
                                                       </div>
                                                      </li>
                                                  </ul>
                                              </div>
                                      </div>
                                </div>

                                <div className="col-md-5 offset-md-2">
                                    <div className="card p-2 m-3 view">
                                      <img src={projectEleven} alt="project-nine" className='img-fluid'/>                                              
                                              <div className="mask pt-5">
                                                  <h3>Programming Hero</h3>
                                                  <ul>
                                                      <li className='mx-2'>
                                                          <a href="https://alamgir8.github.io/My-Website/phero/index.html" target='blank' className="info">Live View <span className='mx-1 h6 text-white'><FaEye/></span></a>
                                                      </li>
                                                      <li className='mx-2'>
                                                          <a href="https://github.com/alamgir8/My-Website/tree/main/phero" target='blank' className="info">Client <span className='mx-1 h6 text-white'><FaGithub/></span></a>
                                                      </li>
                                                      <li className='mx-2'>
                                                            <button className='info' onClick={handlePHero}>
                                                                Feature <span className='mx-1 h6 text-white'><FaListAlt/></span>
                                                           </button>
                                                        <div>
                                                        <Modal
                                                            isOpen={showPH}
                                                            onRequestClose={handlePHero}
                                                            ariaHideApp={false}
                                                            style={customStyles}
                                                            contentLabel="Example Modal"
                                                            >
                                                            <h2 className='text-center'>Programming Hero</h2>
                                                        <div>
                                                            <ol>
                                                                    <li className='py-1'>
                                                                        It is clone site of Programming hero. All images collect from original site. This site design collect from original site but code is mine.
                                                                    </li>
                                                                    
                                                                    <li className='py-1'>
                                                                        Using Tools : <b>Javascript, ES6, Html,Bootstrap, CSS and other essential elements</b>
                                                                    </li>
                                                                </ol>
                                                        </div>
                                                        <div className='text-right info'>
                                                            <button className="btn btn-info info text-right h5" onClick={handlePHero}>
                                                            Close
                                                        </button>
                                                        </div>
                                                        </Modal>
                                                           
                                                       </div>
                                                      </li>
                                                  </ul>
                                              </div>
                                      </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="card p-2 m-3 view">
                                      <img src={projectTwelve} alt="project-ten" className='img-fluid'/>                                              
                                              <div className="mask pt-5">
                                                  <h3>Book Library</h3>
                                                    <ul>
                                                      <li className='mx-2'>
                                                          <a href="https://alamgir8.github.io/My-Website/library/index.html" target='blank' className="info">Live View <span className='mx-1 h6 text-white'><FaEye/></span></a>
                                                      </li>
                                                      <li className='mx-2'>
                                                          <a href="https://github.com/alamgir8/My-Website/tree/main/library" target='blank' className="info">Client <span className='mx-1 h6 text-white'><FaGithub/></span></a>
                                                      </li>
                                                      <li className='mx-2'>
                                                            <button className='info' onClick={handleLibrary}>
                                                                Feature <span className='mx-1 h6 text-white'><FaListAlt/></span>
                                                           </button>
                                                        <div>
                                                        <Modal
                                                            isOpen={showLB}
                                                            onRequestClose={handleLibrary}
                                                            ariaHideApp={false}
                                                            style={customStyles}
                                                            contentLabel="Example Modal"
                                                            >
                                                            <h2 className='text-center'>Book Library</h2>
                                                        <div>
                                                                <ol>
                                                                    <li className='py-1'>
                                                                        It is a simple book library site.In this side added some book by category and specific price. 
                                                                    </li>
                                                                    
                                                                    <li className='py-1'>
                                                                        Using Tools : <b>HTML, CSS and other essential elements</b>
                                                                    </li>
                                                                </ol>
                                                        </div>
                                                        <div className='text-right info'>
                                                            <button className="btn btn-info info text-right h5" onClick={handleLibrary}>
                                                            Close
                                                        </button>
                                                        </div>
                                                        </Modal>
                                                            
                                                       </div>
                                                      </li>
                                                  </ul>
                                              </div>
                                      </div>
                                </div>

                            </div>
                          </div>
                      </div>
                  </div>
            </div>
        
    );
};


export default Portfolio;