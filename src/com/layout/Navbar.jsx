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
   
 
    return (
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur  supports-[backdrop-filter]:bg-background/60  lg:px-0 ">
        <div className="container position-relative sticky top-0 z-50   ">
          <div className="grid navbar-grid mx-3">
            <div className="logo">
              <h1 className=" xl:mt-2 mt-4 lg:mt-2 fw-900 fw-bold text-5xl xl:text-6xl   ">PortFolio</h1>
            </div>
            <nav
              className={
                showMenu
                  ? "menu-mobile w-[60%] h-[100vh] z-[9999]  rounded-md  text-white  bg-gray-300 ml-auto right-0 hover:bg-bg-gray-500"
                  : "menu-web  "
              }
              >
              <ul className="menu mt-1 ">
                <li className="">
                  <a href="#about ">About</a>
                </li>

                <li className="">
                  <a href="#about">Skill</a>
                </li>
                <li className="">
                  <a href="#project">Project</a>
                </li>

                <li className="">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
            <div className=" ham-menu">
              <button
                onClick={handleButtonToggle}
                className="flex px-3 pt-1 pb-1 border rounded-4 justify-content-center align-content-end">
                <AiOutlineMenu />
              </button>
            </div>
          </div>
        </div>
      </header>
    )
}
export default Navbar