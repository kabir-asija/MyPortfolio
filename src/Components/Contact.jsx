import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <Header />
      <section className="min-h-screen flex flex-col items-center justify-center px-4">
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        <motion.form
          className="w-full max-w-sm shadow-[5px_5px_29px_-13px_#464646] border border-[#838383] p-6 rounded-lg flex flex-col gap-4"
          onSubmit={handleSubmit}
          method=""
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="flex flex-col text-left">
            <label htmlFor="name" className="text-sm mb-1 font-medium">
              Name
            </label>
            <label className="input validator  bg-white text-black">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </g>
              </svg>
              <input
                type="text"
                required
                placeholder="Name"
                minlength="3"
                maxlength="30"
              />
            </label>
            <p className="validator-hint hidden">Enter a valid name</p>
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor="email" className="text-sm mb-1 font-medium">
              Email
            </label>
            <label className="input validator bg-white text-black">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor="message" className="text-sm mb-1 font-medium">
              Message
            </label>
            <textarea
              className="textarea  bg-white text-black"
              placeholder="Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="m-2 mt-4 bg-amber-400 text-black cursor-pointer hover:bg-amber-500 font-medium py-2 rounded transition"
          >
            Send Message
          </button>
        </motion.form>
      </section>
    </>
  );
};

export default Contact;
