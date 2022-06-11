import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineDoubleRight } from "react-icons/ai";

const Main = () => {
  return (
    <motion.div
      className="h-[100vh] w-[100vw] grid place-content-center font-poppins"
      initial={{ y: "-100%" }}
      animate={{ y: "0" }}
      exit={{ opacity: 0 }}
      transition={{
        y: { ease: "easeOut", duration: 2 },
        opacity: { ease: "easeOut", duration: 0.5 },
      }}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, ease: "easeOut", duration: 1 }}
        className="text-[3rem] lg:text-[6rem] md:text-[5rem]  mb-[3rem] md:mb-[4rem] lg:mb-[6rem]  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600"
      >
        To-do List App
      </motion.h1>
      <Link to="/todos">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, ease: "easeOut", duration: 1 }}
          className="text-2xl lg:text-3xl flex items-center justify-center mt-[0rem] md:mt-[0rem] lg:mt-[0rem] text-gray-500 hover:text-blue-500"
        >
          Click to proceed{" "}
          <AiOutlineDoubleRight className="pl-[0.5rem] w-[2rem]" />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default Main;
