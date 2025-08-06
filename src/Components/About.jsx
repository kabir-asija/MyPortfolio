import React from "react";
import Header from "./Header";
import { motion } from "framer-motion";
import avatar from "/src/assets/avatar.png";

function About() {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen pt-13">
      <Header />
      <motion.div
        className=" w-[65vw] flex flex-col md:flex-row justify-evenly items-center px-3"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="max-w-56 p-3 mb-5 md:mb-0 overflow-hidden rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <img
            src={avatar}
            loading="lazy"
            alt="Avatar"
            className="w-full h-auto object-cover rounded-full"
          />
        </motion.div>

        <motion.div
          className="bg-[#1e1e1e] border border-gray-700 rounded-lg shadow-lg p-4 md:w-md max-w-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="bg-[#2d2d2d] px-4 py-2 flex space-x-2 rounded-t-md">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>

          <pre className="text-sm font-mono p-4 overflow-auto text-white">
            <code>
              <span className="text-blue-400">const</span> aboutMe{" "}
              <span className="text-pink-400">=</span> {"{"}
              {"\n"}
              &nbsp;&nbsp;Name: <span className="text-green-400">'Kabir'</span>,
              {"\n"}
              &nbsp;&nbsp;DOB:{" "}
              <span className="text-green-400">'04/11/2005'</span>,{"\n"}
              &nbsp;&nbsp;Email:{" "}
              <span className="text-green-400">'kabirasija3@gmail.com'</span>,
              {"\n"}
              &nbsp;&nbsp;Address:{" "}
              <span className="text-green-400">'Punjab, India'</span>
              {"\n"}
              {"};"}
            </code>
          </pre>
        </motion.div>
      </motion.div>

      <motion.div
        className="py-7"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <a
          href="/MyPortfolio/Resume.pdf"
          download
          className="relative inline-flex items-center gap-2 overflow-hidden rounded-full border-2 border-blue-600 bg-blue-600 px-6 py-3 text-white font-semibold transition-all duration-300 group hover:bg-blue-700 hover:shadow-lg"
        >
          <span className="absolute inset-0 bg-white opacity-10 transition-all duration-500 scale-0 group-hover:scale-100 rounded-full"></span>
          <span className="relative z-10">Download Resume</span>
        </a>
      </motion.div>
    </div>
  );
}

export default About;
