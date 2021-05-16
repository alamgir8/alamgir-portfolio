import React from 'react';
import './Resume.css';
import resume from './../../img/Alamgir Resume.pdf';
import Navbar from '../Home/Navbar';

const Resume = () => {
   
      
      
    return (
                <div className='resume-section'>
                <Navbar/>                
                    <div className="resume">
                            <div className="p-4">
                                <div className="px-3 py-5">
                                    <h1 className="offset-md-2 my-resume pb-2 text-primary">MY RESUME <span className='icon'><i className="bi bi-journal-richtext"></i></span></h1>
                                <div className="row">
                                <div className="col-md-5 offset-md-2">
                                <div className="education-section p-3">
                                    
                                            <h5 className="pb-3 h3">Education</h5>
                                            <div className="ssc pb-3">
                                                <h6 className="py-1 px-3 bg-success year">2011</h6>
                                                <div className="py-0">
                                                    <p className="my-0 h6">Secondary School Certificate</p>
                                                    <p className="my-0"><small>Gaibandha NH Modern High School</small></p>
                                                    <p className="my-0">Complete SSC from Commerce Group at 4.81 GPA</p>
                                                </div>
                                            </div>
                                            <div className="hsc pb-3">
                                                <h6 className="py-1 px-3 bg-success year">2013</h6>
                                                <div className="py-0">
                                                    <p className="my-0 h6">Higher Secondary Certificate</p>
                                                    <p className="my-0"><small>Gaibandha Govt Collage</small></p>
                                                    <p className="my-0">Complete HSC from Commerce Group at 4.90 GPA</p>
                                                </div>
                                            </div>
                                            <div className="honours pb-3">
                                                <h6 className="py-1 px-3 bg-success year">2017</h6>
                                                <div className="py-0">
                                                    <p className="my-0 h6">Bachelor of Business Administration</p>
                                                    <p className="my-0"><small>Kazi Azimuddin Collage</small></p>
                                                    <p className="my-0">Complete BBA at 3.01 CGPA</p>
                                                </div>
                                            </div>
                                            <div className="masters pb-3">
                                                <h6 className="py-1 px-3 bg-success year">2019</h6>
                                                <div className="py-0">
                                                    <p className="my-0 h6">Master of Business Administration</p>
                                                    <p className="my-0"><small>Tongi Govt Collage</small></p>
                                                    <p className="my-0 ">MBA is now ongoing</p>
                                                    </div>
                                            </div>
                                        </div>
                                    
                                   
                                </div>
                                    <div className="col-md-4 offset-md-1">
                                        <div className="experience-section p-3">
                                            <div className="experience">
                                                <h5 className="pb-3 h3"> Experience</h5>
                                            </div>
                                            <div className="idb-training pb-1">
                                                <h6 className="py-1 px-3 bg-success year">2018</h6>
                                               <div className="my-0">
                                                    <p className='h6 py-0'>HTML, CSS, Javascript</p>
                                                    <p>Complete HTML,CSS and Javascript from IDB scholarship project round 41</p>
                                               </div>
                                            </div>
                                            <div className="affiliate-marketing pb-1">
                                                <h6 className="py-1 px-3 bg-success year">2019</h6>
                                                <div className="my-0 py-0">
                                                    <p className="py-0 h6">Accounting Manager</p>
                                                    <p>Working with a affiliate-marketing company in accounting section is an Accountant</p>
                                                </div>
                                            </div>
                                            <div className="programing-hero pb-1">
                                                <h6 className="py-1 px-3 bg-success year">2021</h6>
                                               <div className="py-0">
                                                    <p className="py-0 h6">Bootstrap, Javascript, React, Node, MongoDB</p>
                                                    <p>Complete Bootstrap, Javascript, React, Node and MongoDB from Complete Web Development Course with <span className="h6">Jhankar Mahbub</span> </p>
                                               </div>
                                            </div>
                    
                                        </div>
                                    </div>
                                    
                                
                                </div>
                                <div className="row">
                                    <div className="col-md-5 offset-md-2">
                                       <div className="skill-section p-3">
                                        <div className="skill">
                                            <h5 className="pb-3 h3"> Coding Skill [Frontend]</h5>
                                        </div>
                                        <div className="py-1">
                                            <p className="my-0 h6 py-1">HTML</p>
                                            <div className="progress">
                                                <div className="progress-bar bg-success" id='html' style={{"width": "100%"}}></div>
                                            </div>
                                        </div>
                                        <div className="py-1">
                                            <p className="my-0 h6 py-1">CSS</p>
                                            <div className="progress">
                                                <div className="progress-bar bg-info" id='css' style={{"width": "90%"}}></div>
                                            </div>
                                        </div>
                                        <div className="py-1">
                                            <p className="my-0 h6 py-1">Bootstrap</p>
                                            <div className="progress">
                                                <div className="progress-bar bg-warning" id='bootstrap' style={{"width": "90%"}}></div>
                                            </div>
                                        </div>
                                        <div className="py-1">
                                            <p className="my-0 h6 py-1">Material-Ui</p>
                                            <div className="progress">
                                                <div className="progress-bar bg-danger" id='material' style={{"width": "50%"}} ></div>
                                            </div>
                                        </div>
                                        <div className="py-1">
                                            <p className="my-0 h6 py-1">Javascript</p>
                                            <div className="progress">
                                                <div className="progress-bar bg-info" id='javascript' style={{"width": "75%"}}></div>
                                            </div>
                                        </div>
                                        <div className="py-1">
                                            <p className="my-0 h6 py-1">React</p>
                                            <div className="progress">
                                                <div className="progress-bar bg-success" id='react' style={{"width": "75%"}}></div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="col-md-4 offset-md-1">
                                    <div className="skill-section p-3">
                                        <div className="skill">
                                                <h5 className="pb-3 h3"> Coding Skill [Backend]</h5>
                                        </div>
                                        <div className="backend">
                                            <div className="py-1">
                                            <p className="my-0 h6 py-1">Node</p>
                                               <div className="progress">
                                                <div className="progress-bar bg-primary" id='node' style={{"width": "70%"}}></div>
                                               </div>
                                            </div>
                                            <div className="py-1">
                                                <p className="my-0 h6 py-1">Express</p>
                                                <div className="progress">
                                                   <div className="progress-bar bg-success" id='express' style={{"width": "70%"}}></div>
                                                </div>
                                            </div>
                                            <div className="py-1">
                                                <p className="my-0 h6 py-1">MongoDB</p>
                                                   <div className="progress">
                                                    <div className="progress-bar bg-warning" id='mongo' style={{"width": "70%"}}></div>
                                                   </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>

                                <div className="text-end">
                                    <form method="get" action={resume}>
                                        <button type="submit" className='btn btn-success'> <span className='mx-2'><i className="bi bi-download"></i></span>Download CV</button>
                                    </form>
                                </div>
                                </div>
                            </div>
                        </div>
                </div>
              
        
    );
};

export default Resume;