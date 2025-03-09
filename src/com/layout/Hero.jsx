import { useState } from "react"
import { motion } from "framer-motion"
import { IoMdDownload } from "react-icons/io"
import TextAni from "../Animation/TextAni"
import resume from "./Rocky-resume.pdf"
import "../../App.css"

export const Hero = () => {
  const handleDownload = async () => {
    const response = await fetch(resume)
    const blob = await response.blob()
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.download = "Rocky-Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="relative mt-[40px]">
      <div className="container p-5 grid grid-cols-1 md:grid-cols-2">
        {/* Left Section - Text Content */}
        <div className="pt-3 about col pt-lg-0 justify-content-lg-center align-content-center d-flex flex-column">
          <h1 className="display-3 fw-bold">Hi There,</h1>
          <h1 className="display-3 fw-bold">
            I'm Rocky <span className="text-danger">Sheoran</span>
          </h1>
          <h1 className="pt-3 pb-3">I am {TextAni()}</h1>
          <p>
            I am a passionate web developer with expertise in MERN STACK and
            modern web technologies. I love creating beautiful and functional
            websites that solve real-world problems.
          </p>

          {/* Download Resume Button */}
          <button
            onClick={handleDownload}
            className="w-56 h-16 bg-black border-3 rounded-4">
            <span className="text-white flex gap-2 px-2 text-3xl text-decoration-none">
              <span className="mt-2">
                <IoMdDownload />
              </span>
              <span>Resume...</span>
            </span>
          </button>
        </div>

        {/* Right Section - Hero Image */}
        <div className="pt-4 hero-boy justify-content-start justify-content-lg-center">
          <motion.div
            className="pt-hero-bo md:pl-20 bg-transparent justify-content-start justify-content-lg-center"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}>
            <img
              src="/image/boy-2-removebg-preview (1).png"
              alt="hero-boy"
              className="h-[500px] bg-transparent w-[500px]"
            />
          </motion.div>

          {/* Tech Logos */}
          <img
            src="/image/nodejs.png"
            alt="nodejs"
            className="logo rounded-md absolute react block md:hidden"
          />
          <img
            src="/image/react.png"
            alt="react"
            className="logo rounded-md absolute boot block md:hidden"
          />
          <img
            src="/image/mongo.jpeg"
            alt="mongo"
            className="logo rounded-md absolute js block md:hidden"
          />
        </div>
      </div>

      {/* Social Links */}
      <div className="gap-3 absolute b-2 justify-content-center hidden lg:block rounded-5 align-items-center social d-flex flex-column">
        <a href="https://www.instagram.com/rocky_sheoran61?igsh=NDh6cGFmcHA4czZm">
          <img
            src="/image/insta1.jpeg"
            alt="Instagram"
            className="logo1 transition duration-200 hover:-rotate-180 hover:bg-gray-900"
          />
        </a>
        <a href="https://www.linkedin.com/in/rocky-77a984267">
          <img
            src="/image/link1.png"
            alt="LinkedIn"
            className="logo1 transition duration-200 hover:-rotate-180"
          />
        </a>
        <a href="https://github.com/RockySheoran">
          <img
            src="/image/git11.jpeg"
            alt="GitHub"
            className="logo1 transition duration-200 hover:-rotate-180"
          />
        </a>
        <a href="https://leetcode.com/u/rockysheoran72/">
          <img
            src="/image/leet1.png"
            alt="LeetCode"
            className="logo1 transition duration-200 hover:-rotate-180"
          />
        </a>
      </div>
    </section>
  )
}
