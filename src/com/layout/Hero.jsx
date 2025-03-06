 
//  import { Alert } from "bootstrap"
import { useState } from "react"
import "../../App.css"
import Alert from "./Alert"
import resume from "./Rocky-resume11.pdf"
import TextAni from "../Animation/TextAni"
// import { GrResume } from "react-icons/gr"




// import resume from "./image/Rocky-resume1.docx"
 export const Hero = () => {


    return (
      <section className="pb-5  position-relative hero1 pb-lg-1">
        <div className="container p-5 row-cols-lg-2 hero-section d-flex flex-column flex-lg-row d-grid ">
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
                download="resume"
                className="text-white text-decoration-none">
                {" "}
                Download cv..
              </a>
            </button>
          </div>
          <div className="pt-4   hero-boy justify-content-start justify-content-lg-center ">
            <img
              src="/image/boy-2.jpg"
              alt="hero-boy"
              className="h-100 w-100"
            />
            <img
              src="/image/nodejs.png"
              alt="react"
              className="logo rounded-md   position-absolute react d-lg-none"
            />
            <img
              src="/image/react.png"
              alt="react"
              className="logo rounded-md position-absolute boot d-lg-none"
            />
            <img
              src="/image/mongo.jpeg"
              alt="mongo"
              className="logo rounded-md position-absolute  js d-lg-none "
            />
          </div>
        </div>
        <div className="gap-3 position-absolute b-2 justify-content-center rounded-5 align-items-center bg-dander social d-flex flex-column ">
          <a href="https://www.instagram.com/rocky_sheoran61?igsh=NDh6cGFmcHA4czZm">
            <img
              src="/image/insta1.jpeg"
              alt=""
              className="logo1  hover:bg-gray-900"
            />
          </a>
          <a href="https://www.linkedin.com/in/rocky-77a984267">
            <img src="/image/link1.png" alt="" className="logo1" />{" "}
          </a>
          <a href="https://github.com/RockySheoran">
            <img src="/image/git11.jpeg" alt="" className="logo1" />
          </a>
          <a href="https://leetcode.com/u/rockysheoran72/">
            {" "}
            <img src="/image/leet1.png" alt="" className="logo1" />
          </a>
        </div>
      </section>
    )
 }