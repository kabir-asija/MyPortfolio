import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Home = () => {
  return (
    <section className="justify-center min-h-screen flex flex-col items-center px-5">
      <motion.h2
        className="font-bold text-5xl mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Kabir
      </motion.h2>

      <motion.h4
        className="text-2xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        I’m a{" "}
        <span className="text-cyan-400 font-semibold">
          <Typewriter
            words={["Developer", "Tech Enthusiast"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1300}
          />
        </span>
      </motion.h4>

      <motion.div
        className="flex gap-6 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-cyan-400 transition duration-300"
        >
          <FaGithub className="hover:drop-shadow-[0_0_10px_#67e8f9]" />
        </a>
        <a
          href="https://linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-cyan-400 transition duration-300"
        >
          <FaLinkedinIn className="hover:drop-shadow-[0_0_10px_#67e8f9]" />
        </a>
        <a
          href="mailto:your@email.com"
          className="text-2xl hover:text-cyan-400 transition duration-300"
        >
          <HiOutlineMail className="hover:drop-shadow-[0_0_10px_#67e8f9]" />
        </a>
      </motion.div>
    </section>
  );
};

export default Home;
