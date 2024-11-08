import React from 'react'
// import { Card } from 'react-bootstrap';

import Cards from './card';


const Project = () => {
    const projectJson = [
         {
          title: 'Portfolio',
          desc: 'Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.',
          image: "/image/portfolio.png",
          live: "#",
          github: "#"
        },
        {
          title: 'Country Tour',
          desc: 'The World Countries Information Project provides detailed data on populations, capitals, and unique facts, educating users about global geography and cultures.',
          image: "/image/worldTour.png",
          live: "https://world-tour1.netlify.app/",
          github: "https://github.com/RockySheoran/world-tour"  
        },
        {
          title: 'E-commerce website ',
          desc: 'The e-commerce frontend features a responsive design, intuitive navigation, quick add-to-cart functionality, high-quality images.',
          image: "/image/e-c.png",
          live: "https://e-commerce-project-rs.netlify.app/",
          github: "https://github.com/RockySheoran/E-comerce-project"
        },
        {
          title: 'Pokemon',
          desc: ' Pokemon cards tell the species about name, speed, weight, experience, abilities, attack, and height.',
          image: "/image/p.png",
          live: "https://pokemonking.netlify.app/",
          github: "https://github.com/RockySheoran/pokemonSite"
        },
     
       
       
      ];
    
  return (
    <section className="project1 position-relative " id="project">
    <div className="container pb-4 project position-relative" id="project">
        <h1 className='p-5 mx-5 text-white'>My Project </h1>
        <div className="flex-wrap gap-5 project-grid d-grid d-flex justify-content-center">
        {projectJson.map((items,index) => {
                return <Cards  item={items} key={index} />              
              })}   

        </div>
    </div>
    </section>
   
  )
}

export default Project
