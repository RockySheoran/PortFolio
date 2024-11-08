import { Hero } from "./layout/Hero"
import { Navbar } from "./layout/Navbar"
import PaticleBackground from "../com/heropartical/partical"
import About from "./layout/About"

import "../App.css"
import Project from "./layout/Project"
import Contact from "./layout/Contact1"
import { Footer } from "./layout/Footer"
import Alert from "./layout/Alert"
// import { Alert } from "bootstrap"

// import Contact from "./layout/Contact"

export const Home = () =>{
    return (<>
  
    <PaticleBackground  />
    
           
        <Navbar/>
        
        <Hero>    
        </Hero>
      
        <About/>
        <Project/>
        
        <Contact/>
        <Footer/>
       

    
    </>)
}