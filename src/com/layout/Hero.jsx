 
//  import { Alert } from "bootstrap"
import { useState } from "react"
import "../../App.css"
import Alert from "./Alert"
import resume from "./Rocky-resume.pdf"
import TextAni from "../Animation/TextAni"
// import { GrResume } from "react-icons/gr"
import { motion } from "framer-motion"
import { IoMdDownload } from "react-icons/io"



// import resume from "./image/Rocky-resume1.docx"
 export const Hero = () => {


    return (
      <section className="  relative  mt-[40px]">
        <div className="container p-5  grid grid-cols-1 md:grid-cols-2">
          {/* <Alert/> */}
          <div className="pt-3 about col pt-lg-0 justify-content-lg-center align-content-center d-flex flex-column ">
            <h1 className="display-3 fw-bold ">Hi There,</h1>
            <h1 className="display-3 fw-bold ">
              I'm Rocky <span className="text-danger">Sheoran</span>
            </h1>
            <h1 className="pt-3 pb-3 ">I am {TextAni()}</h1>
            <p>
              I am a passionate web developer with expertise in MERN STACK , and
              Modern web technologies. I love creating beatiful and functional
              website that solve real world problems.
            </p>
            {/* <button type="button" className="btn1 btn btn-dark fw-bold fz-1 display-3 font-xl "> Download cv..</button> */}

            {/* <button onClick={h}  className="z-50 w-56 h-16 text-white bg-black border-3 rounded-4 "  >{show == true ? <PdfView/> :"Show resume"}</button> */}
            <button className="w-56 h-16 bg-black border-3 rounded-4">
              <a
                href={resume}
                target="_blank"
                download="Rocky-Resume"
                className="text-white flex gap-2 px-2 text-decoration-none">
                {" "}
                <span className="mt-2">
                  <IoMdDownload />
                </span>{" "}
                <span>Resume..</span>
              </a>
            </button>
          </div>
          <div className="pt-4   hero-boy justify-content-start justify-content-lg-center ">
            <motion.div
              className="pt-hero-bo  md:pl-20 bg-transparent justify-content-start justify-content-lg-center "
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}>
              <img
                // src="/image/boy-2.jpg"
                src="/image/boy-2-removebg-preview (1).png"
                alt="hero-boy"
                className=" h-[500px]  bg-transparent    w-[500px] "
              />
            </motion.div>
            {/* <img
              src="/image/boy-2.jpg"
              alt="hero-boy"
              className="h-100 w-100"
            /> */}
            <img
              src="/image/nodejs.png"
              alt="react"
              className="logo rounded-md   absolute react block md:hidden"
            />
            <img
              src="/image/react.png"
              alt="react"
              className="logo rounded-md absolute boot block md:hidden"
            />
            <img
              src="/image/mongo.jpeg"
              alt="mongo"
              className="logo rounded-md absolute  js block md:hidden "
            />
          </div>
        </div>
        <div className="gap-3 absolute b-2 justify-content-center  hidden lg:block rounded-5 align-items-center bg-dander social d-flex flex-column ">
          <a href="https://www.instagram.com/rocky_sheoran61?igsh=NDh6cGFmcHA4czZm">
            <img
              src="/image/insta1.jpeg"
              alt=""
              className="logo1 transition duration-200 hover:-rotate-180  hover:bg-gray-900"
            />
          </a>
          <a href="https://www.linkedin.com/in/rocky-77a984267">
            <img
              src="/image/link1.png"
              alt=""
              className="logo1 transition duration-200 hover:-rotate-180"
            />{" "}
          </a>
          <a href="https://github.com/RockySheoran">
            <img
              src="/image/git11.jpeg"
              alt=""
              className="logo1 transition duration-200 hover:-rotate-180"
            />
          </a>
          <a href="https://leetcode.com/u/rockysheoran72/">
            {" "}
            <img
              src="/image/leet1.png"
              alt=""
              className="logo1 transition duration-200 hover:-rotate-180"
            />
          </a>
        </div>
      </section>
    )
 }