import { Hero } from "./layout/Hero"
import { Navbar } from "./layout/Navbar"
import PaticleBackground from "../com/heropartical/partical"
import About from "./layout/About"

import "../App.css"
import Project from "./layout/Project"
import Contact from "./layout/Contact1"
import { Footer } from "./layout/Footer"
import Alert from "./layout/Alert"
import MacbookMockup from "./Animation/MacbookMockup"
import Certifications from "./layout/Certification"
// import { Alert } from "bootstrap"

// import Contact from "./layout/Contact"

export const Home = () =>{
    return (
      <>
        <PaticleBackground />

        <Navbar />
        <div className="">
          <Hero></Hero>
        </div>

        <About />

        <Project />
        <div className="bg-white">
          <Certifications />
        </div>

        <Contact />
        <Footer />
      </>
    )
}