import React from 'react'
import "../../App.css"

const About = () => {
  return (
    <section
      className="p-0 pb-4 about1  position-relative p-sm-5 p-lg-1 "
      id="about">
      <div className="container ">
        <div className="pt-4 name d-flex flex-column align-items-center">
          <h3 className="text-danger">ABOUT ME</h3>
          <h2 className="fw-bold">Hi, I'm Rocky Sheoran</h2>
          <p className="md:px-5 px-4 pt-2">
            A Full stack developer passionate about building intuitive,
            scalable, and user-friendly web applications.
          </p>
        </div>
        <div className="md:px-5 px-3 pt-5 j_skill row-cols-lg-2 d-flex flex-column flex-lg-row">
          <div className="px-2 m-2 journey col m-lg-3 px-lg-4 ">
            <h3 className="fw-bold">My Journey</h3>
            <p className="pt-3 ">
              I embarked on my journey in web development with a passion for
              creating intuitive and scalable applications. Proficient in the
              MERN stack, I have successfully built projects such as a Food
              Delivery Website, a Job Portal Website, and a Real-Time Chat
              Application. These projects showcase my ability to seamlessly
              integrate robust backend functionalities with user-friendly
              frontend designs, highlighting my commitment to delivering
              high-quality, efficient, and engaging web solutions.
            </p>
            <img
              src="/image/mern.png"
              alt="mern"
              className="p-3 img-fluid h-25 z-index-1"
            />
          </div>
          <div className="py-5 md:mx-2 mx-0.5 mt-5 col ss align-content-center mx-lg-3 align-items-center d-flex flex-column ">
            <div className=" align-items-center d-flex flex-column">
              <h3>Skills & Expertise</h3>
            </div>

            <div className="flex-wrap gap-4  px-1 pt-3 mt-3 skill d-flex align-items-center px-lg-5 ">
              <div className="logo11 d-flex justify-content-center align-items-center ">
                <img src="/image/java.png" alt="DSA" className="logo22 pe-2" />
                <h4>Java+Dsa</h4>
              </div>

              <div className="logo11 d-flex justify-content-center align-items-center ">
                <img src="/image/html.png" alt="html" className="logo22" />
                <h4>Html</h4>
              </div>
              <div className="logo11 d-flex justify-content-center align-items-center ">
                <img src="/image/css.png" alt="css" className="logo22 pe-2" />
                <h4>Css</h4>
              </div>
              <div className="logo11 d-flex justify-content-center align-items-center ">
                <img
                  src="/image/boot1.png"
                  alt="BootStrap"
                  className="logo22 pe-2"
                />
                <h4>BootStrap</h4>
              </div>
              <div className="logo11 d-flex justify-content-center align-items-center ">
                <img
                  src="/image/tail.jpeg"
                  alt="Tailwind"
                  className="logo22 pe-2"
                />
                <h4>Tailwind</h4>
              </div>
              <div className="logo11 d-flex justify-content-center align-items-center ">
                <img
                  src="/image/js2.png"
                  alt="javascript"
                  className="logo22 rounded-2 me-2 "
                />
                <h4>JavaScript</h4>
              </div>
              <div className="logo11 d-flex justify-content-center align-items-center ">
                <img
                  src="/image/git3.jpeg"
                  alt="git"
                  className="logo22 rounded-2 me-2 "
                />
                <h4>Git & Github</h4>
              </div>

              <div className="logo11 d-flex justify-content-center align-items-center ">
                <img src="/image/react.png" alt="" className="logo22" />
                <h4>React</h4>
              </div>
              <div className="logo11 d-flex justify-content-center align-items-center ">
                <img src="/image/redux.png" alt="redux" className="logo22" />
                <h4>Redux</h4>
              </div>

              <div className="logo11 d-flex justify-content-center align-items-center ">
                <img
                  src="/image/nodejs.png"
                  alt="Node js"
                  className="logo22 pe-2"
                />
                <h4>Node js</h4>
              </div>
              <div className="logo11 d-flex justify-content-center align-items-center ">
                <img
                  src="/image/nodejs.png"
                  alt="Node js"
                  className="logo22 pe-2"
                />
                <h4>Express.js</h4>
              </div>

              <div className="logo11 d-flex justify-content-center align-items-center ">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvSHnsc86rdr2xn_9m3i4rMzYVhQhIQOjl2Q&s"
                  alt="MongoDB"
                  className="logo22 pe-2"
                />
                <h4>MongoDB</h4>
              </div>

              <div className="logo11 d-flex justify-content-center align-items-center ">
                <img src="/image/sql.png" alt="sql" className="logo22 pe-2" />
                <h4>SQL</h4>
              </div>
              <div className="logo11 d-flex justify-content-center align-items-center ">
                <img
                  src="/image/when-is-it-best-to-use-a-restful-api.png"
                  alt="Rest api"
                  className="logo22 pe-2"
                />
                <h4>Rest Api</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="md:px-5 px-3 mx-3 more-about">
          <h3>More About Me</h3>
          <p>
            I’m learning new web development technologies and improving my Data
            Structures and Algorithms (DSA). Focusing on Full Stack Development
            helps me build responsive, well-designed websites and projects,
            enhancing my problem-solving and development skills.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
