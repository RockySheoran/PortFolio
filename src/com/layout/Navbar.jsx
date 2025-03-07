// import { NavLink } from "react-router-dom"
import "../../App.css"
import { Menu, X } from 'lucide-react'
// import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Hero } from "./Hero";
export const Navbar = () => {
   const [showMenu, setShowMenu] = useState(false);
   const [textC , setTextC]  = useState("");
   console.log(textC)

   const handleButtonToggle = () => {
     setShowMenu(!showMenu);
   };
   
 
    return (
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur  supports-[backdrop-filter]:bg-background/60  lg:px-0 ">
        <div className="container position-relative sticky top-0 z-50   ">
          <div className="grid navbar-grid mx-3">
            <div className="log wave-text">
              <div class="wave-text w-[170px]">
                <span>P</span>
                <span>o</span>
                <span>r</span>
                <span>t</span>
                <span>f</span>
                <span>o</span>
                <span>l</span>
                <span>i</span>
                <span>o</span>
              </div>
            </div>
            <nav
              className={
                showMenu
                  ? "menu-mobile w-[60%] h-[100vh] z-[9999]  rounded-md  text-white  bg-slate-700 ml-auto right-0 hover:bg-bg-gray-500"
                  : "menu-web  "
              }>
              <ul className="menu mt-1 ">
                <li className="">
                  <a
                    onClick={() => setTextC("about")}
                    href="#about "
                    className={textC == "about" ? "text-red-600" : ""}>
                    About
                  </a>
                </li>

                <li className="">
                  <a
                    onClick={() => setTextC("skill")}
                    href="#about"
                    className={textC == "skill" ? "text-red-600" : ""}>
                    {" "}
                    Skill
                  </a>
                </li>
                <li className="">
                  <a
                    onClick={() => setTextC("project")}
                    href="#project "
                    className={textC == "project" ? "text-red-600" : ""}>
                    Project
                  </a>
                </li>

                <li className="">
                  <a
                    onClick={() => setTextC("contact")}
                    href="#contact "
                    className={textC == "contact" ? "text-red-600" : ""}>
                    Contact
                  </a>
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