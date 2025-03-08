import React, { useEffect, useState } from "react"
import "../../App.css"
import MacbookMockup from "../Animation/MacbookMockup"
import { HiExternalLink } from "react-icons/hi"
import { FaGithub } from "react-icons/fa"

const Cards = ({ item, index }) => {
  const [visibleCards, setVisibleCards] = useState([])

  useEffect(() => {
    const handleScroll = () => {
      const cardElements = document.querySelectorAll(".card1")
      cardElements.forEach((card, index) => {
        const rect = card.getBoundingClientRect()
        if (rect.top >= 0 && rect.bottom <= window.innerHeight * 1.3) {
          // 90vh
          setVisibleCards((prev) => [...new Set([...prev, index])])
        } else {
          setVisibleCards((prev) => prev.filter((item) => item !== index))
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check visibility on load

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="position-relative border-4 px-3 sm:px-0 sm:border-none border-solid  rounded-2xl py-4 sm:shadow-none  shadow-xl shadow-red-200  border-red-200 grid grid-cols-1 sm:grid-cols-2">
      <div
        className={
          index % 2 !== 0
            ? " sm:order-2  flex justify-center sm:justify-end items-center "
            : "order-1 sm:order-2 flex justify-center sm:justify-start  items-center"
        }>
        <div
          className={` card1 relative  w-fit z-10 sm:hover:scale-110 transition duration-500 ease-in-out group ${
            visibleCards.includes(index)
              ? index % 2 === 0
                ? "translate-x-0 opacity-100"
                : "translate-x-0 opacity-100"
              : index % 2 === 0
              ? "-translate-x-full opacity-0"
              : "translate-x-full opacity-0"
          }`}>
          <a target="_blank" href={item.live} className="relative z-0">
            {MacbookMockup(item.laptop, item.image)}
          </a>

          <div className=" flex gap-20  justify-center  mt-4   ">
            <div className="  sm:absolute top-[1%] rounded-lg px-3 py-2 bg-[#fc815c]  left-[20%]  sm:opacity-[.00000001] transform transition duration-500 ease-in-out group-hover:opacity-100 sm:group-hover:-translate-y-20 z-20">
              <a
                target="_blank"
                href={item.live}
                className=" no-underline hover:no-underline text-white text-2xl lg:text-4xl  cursor-pointer font-bold flex content-center  items-center ">
                Live
                <HiExternalLink />
              </a>
            </div>
            <div className="sm:absolute top-[1%] rounded-lg px-3 py-2 bg-[#fc815c]  left-[50%] sm:opacity-[.00000001] transform transition duration-500 ease-in-out group-hover:opacity-100 sm:group-hover:-translate-y-20 z-20">
              <a
                target="_blank"
                href={item.github}
                className=" no-underline hover:no-underline text-white  text-2xl lg:text-4xl cursor-pointer font-bold flex content-center  items-center ">
                GitHub
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="hidden sm:block">
          <div
            className={
              index % 2 !== 0
                ? "w-[30%] dummy-card h-1 bg-black absolute top-[50%] left-[50%] z-[1]"
                : "w-[30%] dummy-card  h-1 bg-black absolute top-[50%] right-[50%] z-[1]"
            }></div>

          <a
            target="_blank"
            href={item.live}
            className="h-7 w-7 hover:scale-125 transform transition duration-200 ease-in-out   rounded-full absolute sm:top-[46%] sm:right-[48.5%] md:top-[46.9%] md:right-[48.6%] lg:top-[46%] lg:right-[49.2%] border-3 border-black bg-white z-[10]"></a>
        </div>
      </div>
      <div
        className={
          index % 2 !== 0
            ? " sm:order-1 mt-5 pr-10 md:pr-20"
            : "order-2 mt-5 sm:order-2 pl-10 md:pl-28"
        }>
        <h1 className="text-[#fc815c] mb-2 text-4xl md:text-6xl">
          {item.title}
        </h1>
        <p className=" text-xl md:text-2xl">{item.desc}</p>
        <div className="flex flex-wrap md:gap-3 gap-2">
          {item.tool?.map((element, index) => (
            <span
              className="px-3 py-1 rounded-[20px] border-1 border-slate-400 text-lg md:text-2xl"
              key={index}>
              {element}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cards
