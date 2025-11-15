import React from "react";
import Header from "./Header";
import { motion } from "framer-motion";
import portfolio from '/src/assets/portfolio.png';
import shopease from '/src/assets/shopease.png';
import github from '/src/assets/github.png';

const projects = [
  {
    id: 1,
    img: portfolio,
    title: "Portfolio Website",
    desc: "A sleek, professional portfolio website built with user-friendly, responsive and intuitive design.",
    github: "https://github.com/kabir-asija/Portfolio",
    live: "https://kabir-asija.github.io/Portfolio/"
  },
  {
    id: 2,
    img: github,
    title: "Resumify",
    desc: "A Resume builder web app that allows users to create, customize, and download professional resumes effortlessly",
    github: "https://github.com/kabir-asija/Resumify",
    live: "https://resumify-v2d4.onrender.com"
  },
  {
    id: 3,
    img: shopease,
    title: "ShopEase",
    desc: "An e-commerce shop where users can search for various items and add them to cart.",
    github: "https://github.com/kabir-asija/ShopEase",
    live: "https://kabir-asija.github.io/ShopEase/"
  },
];

function Projects() {
  return (
    <>
      <Header />
      <section className="pt-18 min-h-screen flex flex-col items-center px-4 ">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              className="w-76 pt-4 mb-4 bg-black border border-white rounded-md overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <img
                className="w-full h-48 object-contain p-2 rounded"
                src={p.img}
                alt={p.title}
              />

              <div className=" text-white p-4 gap-4 flex flex-col text-center items-center">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-sm text-zinc-400">{p.desc}</p>

                <div className="flex w-full justify-evenly  text-white">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs bg-black border border-white px-4 py-1 rounded-md cursor-pointer hover:bg-white hover:text-black transition duration-300"
                    >
                      GitHub
                    </a>
                  )}

                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs bg-black border border-white px-4 py-1 rounded-md cursor-pointer hover:bg-white hover:text-black transition duration-300"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-evenly p-2 w-full bg-zinc-900">
                <div className="bg-white text-black text-xs font-semibold px-2 py-1 rounded-full">
                  Html
                </div>
                <div className="bg-white text-black text-xs font-semibold px-2 py-1 rounded-full">
                  CSS
                </div>
                <div className="bg-white text-black text-xs font-semibold px-2 py-1 rounded-full">
                  JavaScript
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
