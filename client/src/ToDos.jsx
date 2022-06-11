import React from "react";
import { motion } from "framer-motion";
import CreateTodo from "./components/CreateTodo";
import ToDo from "./components/ToDo";

const ToDos = () => {
  return (
    <motion.div
      className="min-h-[100vh] w-[100vw] my-6 mx-3 grid justify-center place-content grid-rows-[max-content_max-content_auto] gap-y-4 text-center"
      initial={{ x: "100%", opacity: 0.5 }}
      animate={{ x: "0", opacity: 1 }}
      transition={{
        x: { delay: 1, duration: 1.3, type: "spring", bounce: 0.1 },
        opacity: { delay: 2, duration: 1.2 },
      }}
    >
      <h1 className="text-[2.5rem] md:text-[4rem] self-center lg:text-[4rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600 mb-10 md:mb-12 lg:mb-14">
        To-do List App
      </h1>
      <CreateTodo />
      <ToDo />
    </motion.div>
  );
};

export default ToDos;
