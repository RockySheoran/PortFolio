import React, { useRef } from 'react'
import { Mail } from 'lucide-react'
import Lottie from 'lottie-react'
import contact from './Contact.json'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact1 = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
      // you want to send email in personal email than you can create personal accounts on emailjs website
// and create personal account  , personal template , public key, email service 
      emailjs
        .sendForm('service_qxcidi4', 'template_14oj3c1', form.current, {
          publicKey: 'P7wYCKRXjBOF6hvrb',
        })
        .then(
          () => {
            toast('SUCCESS!');
          },
          (error) => {
            toast('FAILED...', error.text);
          },
        );
    };
  
  return (
    <section
      className=" position-relative relative z-50 sm:px-5 py-10 bg-gray-800"
      id="Contact">
      <div className="container">
        <div className="mb-8 ml-16 md:w-1/2 md:mb-0  px-3 pl-20">
          <h2 className="mb-3 font-bold text-danger">Get in Touch</h2>
          <p className="mb-4 text-white">
            I'm always open to new opportunities and collaborations. Feel free
            to reach out!
          </p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/rocky_sheoran61?igsh=NDh6cGFmcHA4czZm">
              <img
                src="/image/insta1.jpeg"
                alt=""
                className="logo12 h-16 rounded-xl  duration-200 transition hover:rotate-180"
              />
            </a>
            <a href="https://www.linkedin.com/in/rocky-77a984267">
              <img
                src="/image/link1.png"
                alt=""
                className="logo12 h-16 rounded-xl duration-200 transition hover:rotate-180"
              />{" "}
            </a>
            <a href="https://github.com/RockySheoran">
              <img
                src="/image/git11.jpeg"
                alt=""
                className="logo12 h-16 rounded-xl duration-200 transition hover:rotate-180"
              />
            </a>
            <a href="https://leetcode.com/u/rockysheoran72/">
              {" "}
              <img
                src="/image/leet1.png"
                alt=""
                className="logo12 h-16 rounded-xl duration-200 transition hover:rotate-180"
              />
            </a>
          </div>
        </div>
        <div className="email row-cols-lg-2 d-flex flex-column  flex-lg-row  ">
          <div className="col">
            <Lottie
              animationData={contact}
              className=" w-[250px] mx-auto lg:w-[500px] "
            />
          </div>
          <div className="form col max-w-[400px]  px-3 justify-content-center ">
            <form ref={form} onSubmit={sendEmail}>
              <h1 className="text-4xl font-bold text-gray-200 mb-7">
                Contact Me
              </h1>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-100 display-5">
                  Name
                </label>
                <input
                  id="name"
                  placeholder="Full Name"
                  type="text"
                  name="from_name"
                  className="block w-full h-12 p-2 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-100 display-5">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="from_email"
                  className="block w-full h-12 p-2 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm  font-medium text-gray-100 display-5">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Enter Your Message"
                  name="message"
                  rows={4}
                  className="block w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
              </div>

              <input
                type="submit"
                value="Send"
                className=" bg-danger btn btn-outline-light px-3 py-2 rounded-4  w-20"
              />
            </form>
          </div>
        </div>
        <div className="scroll-up   ">
          <button
            onClick={() => window.scrollTo(0, 0)}
            className=" h-20 w-20 rounded-full">
            <img
              src="/image/up.png"
              alt=""
              className="h-20 w-20 rounded-full"
            />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact1
