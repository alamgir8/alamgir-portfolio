import React from 'react';
import Navbar from '../Home/Navbar';
import './style.css';
import { SiNucleo} from "react-icons/si";
import { FaLaptop, FaMobileAlt,FaCode } from "react-icons/fa";


const AboutMe = () => {
   
   
    

    return (
                <div className='about-me-section'>
                
                    <Navbar/>
                    <div className="about"> 
                    <div className="p-4">
                            <div className="px-3 py-5">
                                <h1 className="offset-md-2 about-me pb-2 text-primary">ABOUT ME <span className='icon'><i className="bi bi-person-circle"></i></span></h1>
                            <div className="row">
                                <div className="col-md-5 offset-md-2">
                                <div className="my-details">
                                        <h5 className="pb-2 h3">Professional Web-Developer</h5>
                                        <p>Hello, I'm Alamgir Hossain, I can help you with HTML, CSS, Bootstrap, JavaScript, React, React-Router, Node.js, MongoDB, and Express.js, React-Native, Material-Ui, Redux, Heroku, Firebase, Netlify, Swiper.js, React Hook Form, Git, Npm. I'm not a master of any, but know how to use Google for help.</p>
                                        <p> Looking forward to building up a career in a well-established and environment-friendly organization where acquired knowledge and expertise can be used effectively and efficiently.</p>
                                    </div>
                                </div>
                                <div className="col-md-4 offset-md-1">
                                    
                                        <div className="pb-3"> 
                                            <h5 className='m-0 h3'>Personal Information</h5>
                                        </div>
                                  
                                    <div className="my-info">
                                        <p className='my-1'>
                                            <span className='h6 m-0'>Name</span> : Alamgir Hossain
                                        </p>
                                        <p className='my-1'>
                                           <span className='h6 m-0'> Birth</span> : 01/01/1995
                                        </p>
                                        <p className='my-1'> 
                                            <span className='h6 m-0'>Home</span> : Dewangonj, Jamalpur, Bangladesh
                                        </p>
                                        <p className='my-1'>
                                           <span className='h6 m-0'>Address</span> : Mujibur Market, Hazi Bari Road, Uttara-1230, Dhaka
                                        </p>
                                        <p className='my-1'>
                                            <span className='h6 m-0'>Email</span> : 
                                            alamgirh389@gmail.com
                                        
                                        </p>
                                        <p className='my-1'>
                                            <span className='h6 m-0'>Phone</span> : +8801963706977
                                        </p>
                                                                            
                                    </div>
                                    
                                    </div>
                               
                            
                            </div>
                            </div>
                            </div>
                    </div>
                    
                    <div className="services">
                        <div className="p-4">
                            <div className="px-3 py-5">
                                <h5 className='text-center pb-5 offset-md-1 h2'>Services <FaCode/></h5>
                                <div className="row">
                                    <div className="col-md-3 offset-md-2">
                                        <h2 className='text-center py-2 h1'><SiNucleo/></h2>
                                        <h5 className='text-center pb-2 h4'>Web-Development</h5>
                                        <p className='text-center'>I can help you as a web-developer as I know enough of JavaScript, React, Node, MongoDB and express.js</p>
                                    </div>
                                    <div className="col-md-3">  
                                        <h2 className='text-center py-2 h1'><FaLaptop/></h2>
                                        <h5 className='text-center pb-2 h4'>Web-Design</h5>
                                        <p className='text-center'>I'am good at web design as I know CSS, Bootstrap, Javascript, Material-Ui and other essential web-design language.</p>
                                    </div>
                                    <div className="col-md-3">
                                        <h2 className="text-center py-2 h1"><FaMobileAlt/></h2>
                                        <h5 className='text-center pb-2 h4'>Responsive Design</h5>
                                        <p className='text-center'>I can work for responsive design such as different kind of mobile device and other device as well.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                
                </div>
                   
             
    
    );
};

export default AboutMe;