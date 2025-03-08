import React, { useState, useEffect, useRef } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import "../../App.css" // Ensure you have your CSS styles here
import { span } from "framer-motion/client"
import { RxCross1 } from "react-icons/rx"
export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [activeItem, setActiveItem] = useState(null)
  const menuRef = useRef(null)
console.log(activeItem)
  const handleButtonToggle = () => {
    setShowMenu((prev) => !prev) // Toggle the menu
  }

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false) // Close the menu
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header className="sticky top-0 z-[999999] bg-background/95 backdrop-blur lg:px-0">
      <div className="container position-relative">
        <div className="grid navbar-grid mx-3">
          <a href="#" className="log no-underline text-black wave-text1">
            <div className="wave-text1 w-[170px]">
              <span className="text-5xl font-bold">PortFolio</span>

            </div>
          </a>
          <nav
            ref={menuRef}
            className={`${
              showMenu
                ? "menu-mobile w-[60%] h-[100vh] z-[9999] rounded-md text-white bg-slate-700 ml-auto right-0 transition-transform duration-300 ease-in-out"
                : "menu-web"
            }`}>
            <ul className="menu mt-1">
              {["About", "Skill", "Project", "Contact"].map((item) => (
                <li
                  className={activeItem === item ? "active text-red-500" : ""}
                  key={item}
                  onClick={() => {
                    setActiveItem(item) // Set active item
                    setShowMenu(false) // Close menu on click
                  }}>
                  <a
                    href={`#${item}`}
                    className={
                      activeItem === item ? "active text-red-500" : ""
                    }>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="ham-menu ">
            {showMenu ? (
              <span className="mr-4">
                <RxCross1 />
              </span>
            ) : (
              <button
                onClick={handleButtonToggle}
                className="flex px-3 w-fit pt-1 pb-1 border rounded-4 justify-content-center align-content-end">
                <AiOutlineMenu />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
