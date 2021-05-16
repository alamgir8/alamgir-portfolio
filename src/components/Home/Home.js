import React from 'react';
// import {motion } from "framer-motion";
import Navbar from './Navbar'
import Typewriter from 'typewriter-effect';



const Home = () => {
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
        <div className='home-section'>
            <Navbar/>
            <div className="home">
                <div className="p-4">
                    <div className="px-3 py-5">
                        <div className="offset-md-3">
                            <h2 className='name-header'>HI THERE ! <br/> I'M ALAMGIR HOSSAIN</h2>
                                
                            <Typewriter
                                options={{
                                    strings: ['Web-Developer', 'Web-Designer', 'UI Designer', 'Responsive Designer', 'Font-End-Developer', 'Back-End-Developer'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 60,
                                }}
                                />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;