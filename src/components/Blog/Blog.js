import React from 'react';
// import {motion } from "framer-motion";
import Navbar from '../Home/Navbar';
import blogOne from './../../img/javascript.jpeg';
import blogTwo from './../../img/art.png';
import blogThree from './../../img/react.png';
import blogFour from './../../img/javascrip.jpg';
import {FaEye} from "react-icons/fa";

const Blog = () => {
  // const pageVariants = {
  //   initial: {
  //     opacity: 0,
  //     scale: -.5
  //   },
  //   in: {
  //     opacity: 1,
  //     scale: 1
  //   },
  
  // };
  
  // const pageTransition = {
  //   duration: 1
  // };

    return (
        <div className='blog-section'>
            <Navbar/>
            <div className="blog-main">
            <div className="blog">
                <div className="p-4">
                    <div className="px-3 py-5">
                    <h1 className="offset-md-2 my-blog pb-2 text-primary">BLOG <span className='icon'><i className="bi bi-journal-bookmark-fill"></i></span></h1>
                    <div className="row">
                          
                          <div className="col-md-5 offset-md-2">
                                <div className="card p-2 m-3 view">
                                <img src={blogOne} alt="blog-one" className='img-fluid'/>                                              
                                        <div className="mask">
                                            <h3>Summary of some important method of Javascript</h3>
                                            <ul>
                                                <li>
                                                    <a href="https://alamgirh389.medium.com/summary-of-some-important-method-of-javascript-e6ea84189c49" target='blank' className="info">Live View <span className='mx-1 h6 text-white'><FaEye/></span></a> 
                                                </li>
                                            </ul>
                                        </div>
                                </div>
                          </div>
                          <div className="col-md-5">
                              <div className="card p-2 m-3 view">
                                <img src={blogTwo} alt="blog-two" className='img-fluid'/>                                              
                                        <div className="mask">
                                            <h3>Some Deep discussion of Javascript</h3>
                                            <ul>
                                                <li>
                                                    <a href="https://alamgirh389.medium.com/some-deep-discussion-of-javascripts-b3630df88f1f" target='blank' className="info">Live View <span className='mx-1 h6 text-white'><FaEye/></span></a> 
                                                </li>
                                            </ul>
                                        </div>
                                </div>
                          </div>

                          <div className="col-md-5 offset-md-2">
                                <div className="card p-2 m-3 view">
                                <img src={blogThree} alt="blog-one" className='img-fluid'/>                                              
                                        <div className="mask">
                                            <h3>Some Important Fundamental Concept of React</h3>
                                            <ul>
                                                <li>
                                                    <a href="https://alamgirh389.medium.com/some-important-fundamental-things-of-react-1df38b8ed206" target='blank' className="info">Live View <span className='mx-1 h6 text-white'><FaEye/></span></a> 
                                                </li>
                                            </ul>
                                        </div>
                                </div>
                          </div>
                          <div className="col-md-5">
                              <div className="card p-2 m-3 view">
                                <img src={blogFour} alt="blog-two" className='img-fluid'/>                                              
                                        <div className="mask">
                                            <h3>Some Important method of javascript</h3>
                                            <ul>
                                                <li>
                                                    <a href="https://alamgirh389.medium.com/some-important-method-of-javascript-ed1ffe1f0d5" target='blank' className="info">Live View <span className='mx-1 h6 text-white'><FaEye/></span></a> 
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
            
        </div>
    );
};

export default Blog;