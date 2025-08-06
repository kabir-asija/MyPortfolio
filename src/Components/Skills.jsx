import React from "react";
import Header from "./Header";
import { motion } from "framer-motion";
import java from '/src/assets/java.png';
import js from '/src/assets/js.png';
import mongo from '/src/assets/mongo.png';
import git from '/src/assets/git.png';
import github from '/src/assets/github.png';
import node from '/src/assets/node.png';
import bootstrap from '/src/assets/bootstrap.png';
import react from '/src/assets/React.png';
import tailwind from '/src/assets/tailwind.png';

// Skill data arrays
const languages = [
  { name: "Java", src: java },
  { name: "JavaScript", src: js },
  { name: "MongoDB", src: mongo },
];

const frameworks = [
  { name: "Bootstrap", src: bootstrap },
  { name: "Tailwind", src: tailwind },
  { name: "React", src: react },
  { name: "Nodejs", src: node },
];

const tools = [
  { name: "Git", src: git },
  { name: "Github", src: github },
];

const Skills = () => {
  return (
    <div className="min-h-screen px-4 pt-14">
      <Header />
      <section className="w-full mx-auto text-center">

        <motion.h2
          className="text-3xl font-bold my-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>


        <motion.p
          className="font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I love to learn new things and experiment with new technologies.
          <br />
          These are some of the major languages, technologies, tools, and
          platforms I have worked with:
        </motion.p>


        <motion.h3
          className="font-semibold text-xl my-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Languages & Databases
        </motion.h3>
        <div className="flex flex-wrap justify-center gap-8">
          {languages.map((language, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
            >
              <img
                src={language.src}
                alt={language.name}
                className="w-16 h-16 object-contain mb-2"
              />
              <span className="text-sm">{language.name}</span>
            </motion.div>
          ))}
        </div>


        <motion.h3
          className="font-semibold text-xl my-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Frameworks & Libraries
        </motion.h3>
        <div className="flex flex-wrap justify-center gap-8">
          {frameworks.map((framework, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
            >
              <img
                src={framework.src}
                alt={framework.name}
                className="w-12 h-10 object-contain mb-2"
              />
              <span className="text-sm">{framework.name}</span>
            </motion.div>
          ))}
        </div>


        <motion.h3
          className="font-semibold text-xl mt-6 mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Tools & Platforms
        </motion.h3>
        <div className="flex flex-wrap justify-center gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
            >
              <img
                src={tool.src}
                alt={tool.name}
                className="w-12 h-10 object-contain mb-1 invert-[20%]"
              />
              <span className="text-sm">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
