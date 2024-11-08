// import { NavLink } from "react-router-dom"
import "../../App.css"
import { Menu, X } from 'lucide-react'
// import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Hero } from "./Hero";
export const Navbar = () => {
   const [showMenu, setShowMenu] = useState(false);

   const handleButtonToggle = () => {
     setShowMenu(!showMenu);
   };
   
 
    return(
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur  supports-[backdrop-filter]:bg-background/60 px-4 lg:px-0 ">
      
         <div className="container position-relative sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 lg:px-0   ">
         <div className="grid navbar-grid ">
         <div className="logo">
         <h1 className="mt-2 fw-900 fw-bold display-2">PortFolio</h1>
         </div>
         <nav className={showMenu ? "menu-mobile" : "menu-web"}>
         <ul>
         <li>
                <a href="#about">About</a>
                
              </li>
         
              <li>
                <a href="#about">Skill</a>
                
              </li>
              <li>
                <a href="#project">Project</a>
              </li>
             
              <li>
                <a
                  
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            
         </ul>
            
         </nav>
         <div className=" ham-menu">
            <button onClick={handleButtonToggle} className="flex px-3 pt-1 pb-1 border rounded-4 justify-content-center align-content-end">
              <AiOutlineMenu />
            </button>
          </div>
          </div>
          </div>
   
      </header>
    )
}
export default Navbar