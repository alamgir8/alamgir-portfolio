import React from 'react';
import emailjs from 'emailjs-com';
import Navbar from '../Home/Navbar';

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('alamgirEmail', 'alamgirEmailTemplete', e.target, 'user_lSg6AhE7oeZ7rvfZ7jnDk')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
  


    return (
        <div id='contact' className='contact-section'>
            <Navbar/>
            <div className="contact">
               <div className="offset-md-2 p-4">
                <div className="px-3 py-5">
                    <h1 className='about-me pb-2 text-primary'>CONTACT ME <span className='icon'><i className="bi bi-envelope"></i></span></h1>
                    <form className="contact-form" onSubmit={sendEmail}>
                        <input type="hidden" name="contact_number" />
                        <div className="mb-3">
                            <label className="form-label h6">Name</label>
                            <input type="text" name="user_name" className="form-control" placeholder='Your Name' required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label h6">Email</label>
                            <input type="email" name="user_email" className="form-control" placeholder='Your Email' required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label h6">Message</label>
                            <textarea name="message" className="form-control" placeholder='Your Email' required/>
                        </div>
                        <div className="my-3 text-center pt-3">
                            <button type="submit" value="Send" className="btn bg-info text-white px-5 py-2">SEND</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Contact;