import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <motion.div
      className="h-screen w-screen overflow-hidden font-poppins grid justify-center align grid-rows-[max-content_auto]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        opacity: { ease: "easeOut", duration: 0.5 },
      }}
    >
      <h1 className="text-[2.5rem] md:text-[4rem] lg:text-[4rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600 my-7 md:my-8 lg:my-10">
        <Link to="/">To-do List App</Link>
      </h1>
      <div className="text-center font-medium text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600 my-3 md:my-4">
        <h3 className="text-[2rem] md:text-[3rem] lg:text-[3rem]">Oops!</h3>
        <h4 className="text-[1.8rem] md:text-[2rem] lg:text-[2rem]">
          Page Not Found..
        </h4>
      </div>
    </motion.div>
  );
};

export default Error;
