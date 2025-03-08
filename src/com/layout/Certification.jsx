import React from "react"
import { motion } from "framer-motion"

const certifications = [
  {
    title: "Certified Web Designing",
    issuer: "Solitaire Infosys",
    date: "June 2024",
    description:
      "A comprehensive course covering HTML, CSS, JavaScript, and React.",
    imageUrl:
      "/image/web.jpg",
  },
  {
    title: "DSA Certification ",
    issuer: "Great Learning",
    date: "july 2024",
    description: "An in-depth course on DSA and best practices.",
    imageUrl:
      "/image/dsa.jpg",
  },
  {
    title: "Web Development Certification",
    issuer: "Udemy",
    date: "Dec 2024",
    description: "Learn how to build Full Stack Development",
    imageUrl:
      "/image/full.jpg",
  },
]

const Certifications = () => {
  return (
    <section
      className="py-16 relative z-[9999] bg-white bg-gradient-to-br from-blue-50 to-blue-100"
      id="Certification">
      <div className="container z-[9999] mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold text-center text-blue-600 mb-12">
          Certifications
        </h2>
        <div className="grid py-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }} // 'amount' ensures it only animates when 20% is in view
              className="bg-white  py-2 shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 transition duration-500">
              <img
                src={cert.imageUrl}
                alt={cert.title}
                className="w-[99%] h-[230px] object-scale-down rounded-t-2xl"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-800">
                  {cert.title}
                </h3>
                <p className="text-blue-600 font-semibold">{cert.issuer}</p>
                <p className="text-gray-500 text-sm">{cert.date}</p>
                <p className="text-gray-700 mt-4">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
