import React from "react"
// import { Card } from 'react-bootstrap';

import Cards from "./card"

const Project = () => {
  const projectJson = [
    {
      title: "FoodDel",
      desc: "FoodDel: A  food delivery app showcasing seamless ordering, real-time tracking, and quick delivery for a smooth user experience.",
      image: "/image/FoodDel.png",
      laptop: "/image/macbook1.png",
      live: "https://fooddel-frontend4.onrender.com",
      github: "https://github.com/RockySheoran/FoodDel?tab=readme-ov-file",
      tool: [
        "#HTML",
        "#CSS",
        "#JavaScript",
        "#React",
        "#Tailwind CSS",
        "#Node.js",
        "#Express.js",
        "#MongoDB",
        "#Axios",
        "#REST API",
        "#Redux",
        "#Context Api",
      ],
    },
    {
      title: "Job-Portal",
      desc: "JobPortal: A platform where users can apply for jobs, track application status, and admins perform CRUD operations to manage jobs and candidates efficiently.",
      image: "/image/job.png",
      laptop: "/image/macbook1.png",
      live: "https://job-portal-fontend.onrender.com",
      github: "https://github.com/RockySheoran/Job-Portal",
      tool: [
        "#HTML",
        "#CSS",
        "#JavaScript",
        "#React",
        "#Tailwind CSS",
        "#Node.js",
        "#Express.js",
        "#MongoDB",
        "#Axios",
        "#REST API",
        "#Redux",
        "#Context Api",
      ],
    },
    {
      title: "Real Time Chat Application",
      desc: "Experience effortless one-to-one communication with our real-time chat app. Send instant messages, stay connected, and enjoy smooth, private conversations in real-time.",
      image: "/image/chat.png",
      laptop: "/image/macbook1.png",
      live: "https://chat-app1-fx7t.onrender.com/",
      github:
        "https://github.com/RockySheoran/Real-time-cheat-app?tab=readme-ov-file",
      tool: [
        "#HTML",
        "#CSS",
        "#JavaScript",
        "#React",
        "#Tailwind CSS",
        "#Node.js",
        "#Express.js",
        "#MongoDB",
        "#Axios",
        "#REST API",
        "#Redux",
        "#Context Api",
      ],
    },
    // {
    //   title: "FoodDel",
    //   desc: "FoodDel: A mock food delivery app showcasing seamless ordering, real-time tracking, and quick delivery for a smooth user experience.",
    //   image: "/image/FoodDel.png",
    //   laptop: "/image/macbook1.png",
    //   live: "https://fooddel-frontend4.onrender.com",
    //   github: "https://github.com/RockySheoran/FoodDel?tab=readme-ov-file",
    //   tool: [
    //     "#HTML",
    //     "#CSS",
    //     "#JavaScript",
    //     "#React",
    //     "#Tailwind CSS",
    //     "#Node.js",
    //     "#Express.js",
    //     "#MongoDB",
    //     "#Axios",
    //     "#REST API",
    //     "#Redux",
    //     "#Context Api",
    //   ],
    // },
   
    {
      title: "Portfolio",
      desc: "Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.",
      image: "/image/portfolio.png",
      laptop: "/image/macbook1.png",
      live: "#",
      github: "https://github.com/RockySheoran/PortFolio",
      tool: [
        "#HTML",
        "#CSS",
        "#JavaScript",
        "#React",
        "#Tailwind CSS",
        "#Node.js",
        "#Express.js",
        "#MongoDB",
        "#Axios",
        "#REST API",
        "#Redux",
      ],
    },
    {
      title: "Country Tour",
      desc: "The World Countries Information Project provides detailed data on populations, capitals, and unique facts, educating users about global geography and cultures.",
      image: "/image/worldTour.png",
      laptop: "/image/macbook1.png",

      live: "https://world-tour1.netlify.app/",
      github: "https://github.com/RockySheoran/world-tour",
      tool: ["#HTML", "#CSS", "#JavaScript", "#React", "#Tailwind CSS"],
    },
    {
      title: "E-commerce website ",
      desc: "The e-commerce frontend features a responsive design, intuitive navigation, quick add-to-cart functionality, high-quality images.",
      image: "/image/e-c.png",
      laptop: "/image/macbook1.png",

      live: "https://e-commerce-project-rs.netlify.app/",
      github: "https://github.com/RockySheoran/E-comerce-project",
      tool: ["#HTML", "#CSS", "#JavaScript", "#React", "#Tailwind CSS", ,],
    },
    {
      title: "Pokemon",
      desc: " Pokemon cards tell the species about name, speed, weight, experience, abilities, attack, and height.",
      image: "/image/p.png",
      laptop: "/image/macbook1.png",

      live: "https://pokemonking.netlify.app/",
      github: "https://github.com/RockySheoran/pokemonSite",
      tool: ["#HTML", "#CSS", "#JavaScript", "#React", "#Tailwind CSS"],
    },
  ]

  return (
    <section
      className="project1 px-3 relative bg-white position-relative "
      id="project">
      <div
        className="  md:px-20 lg:px-44  relative pb-4  project position-relative"
        id="project">
        <div className="self-center text-center relative z-[000]  mb-20">
          <span className="py-4 px-4 mx-5 pt-0 z-[999]  relative rounded-3xl  bg-black text-white   border-t-0 border-b-4 border-l-4 border-r-4 border-[#fc815c] text-4xl md:text-6xl  ">
            My Project{" "}
          </span>
          {/* <span className="p-5 mx-5 pt-0 text-[#1788ae]  text-6xl  ">
            My Project{" "}
            </span> */}
        </div>
        <div className="flex-wrap gap-14 sm:gap-28 md:gap-32 project-grid d-grid d-flex justify-content-center">
          {projectJson.map((items, index) => {
            return <Cards item={items} index={index} key={index} />
          })}
        </div>
        <div className=" absolute s z-1 hidden sm:block top-[2%] lg:top-[2.2%]  w-1 h-[100%] left-[50%] bg-black"></div>
      </div>
    </section>
  )
}

export default Project
