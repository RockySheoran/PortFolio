import React from "react"
import { VscLaw } from "react-icons/vsc"

const MacbookMockup = (a,b) => {
    
  return (
    <div className="flex w-[300px]  z-[999999] lg:w-[370px]  justify-center items-center  ">
      <div className="relative ">
        <img src={a} alt="MacBook Mockup" className="w-full z-[999999] " />
        <div className="absolute top-[1.5%] left-[11.6%]  h-[90%]   w-[76.5%]  rounded-lg overflow-hidden">
          <img
            src={b}
            alt="Contact Me Illustration"
            // className="  h-[186px] w-[282px]"
            className="  overflow-hidden h-full z-[999999]  w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default MacbookMockup
