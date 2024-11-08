import { Mail } from 'lucide-react'
import Lottie from 'lottie-react'
import contact from './Contact.json'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../../App.css"




const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => { 
    e.preventDefault();

    emailjs
      .sendForm('service_cepvpxi', 'template_tmx7avs', form.current, {
        publicKey: 'A7sUk7qMgzVstlHy4',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contact" className='relative z-50 px-5 py-10 bg-gray-800 md:px-0 '>
    
      <div className="mx-auto mb-16 max-w-7xl">
        <div className="flex flex-col items-center justify-between g md:flex-row">
          <div className="mb-8 ml-2 md:w-1/2 md:mb-0 ">
            <h2 className="mb-3 font-bold text-danger">Get in Touch</h2>
            <p className="mb-4 text-white/85">I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-foreground/80">
              <img src="/image/git3.jpeg" alt="" className="w-6 h-6"/>
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground/80">
              <img src="/image/insta1.jpeg" alt="" className="w-6 h-6"/>
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground/80">
              <img src="/image/link1.png" alt="" className="w-6 h-6"/>
              </a>
            </div>
            </div>
            {/* <div className="email "> */}
          <div className="">
             <Lottie animationData={contact} className=' w-[350px] mx-auto lg:w-[500px] '/>
             </div>
          <form className="w-full p-10 bg-gray-100 border border-red-300 rounded-lg shadow-lg md:w-1/2 shadow-red-500" ref={form} onSubmit={sendEmail}>
            <h1 className='text-4xl font-bold text-gray-900 mb-7'>Contact Me</h1>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input id="name" placeholder='Full Name' type="text" name="from_name" className="block w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" placeholder='Email' id="email" name="from_email" className="block w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" placeholder='Enter Your Message' name="messages" rows={4} className="block w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
            </div>
            {/* {/* <input type="submit" value="Send" />  */}
            <button type="submit"  className='px-3 py-2 text-white bg-red-500 rounded-lg'>Send Message</button>
          </form>
          </div>
        </div>
      {/* </div> */}
     
    </section>
  )
}

export default Contact