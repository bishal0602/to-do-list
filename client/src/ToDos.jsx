import React from "react";
import { motion } from "framer-motion";
import CreateTodo from "./components/CreateTodo";
// import axios from "axios";
// import { useState } from "react";
import ToDo from "./components/ToDo";
import { Link } from "react-router-dom";

const ToDos = () => {
  //Getting Todos from API

  // const ToDo = () => {
  //   const [todos, setTodos] = useState([]);
  //   useEffect(() => {
  //     axios.get("http://localhost:5000/test").then((res) => {
  //       console.log(res.data);
  //       setData(res.data);
  //     });
  //   }, []);

  //Temporary
  const todos = [
    { id: 1, title: "Finish this project" },
    { id: 2, title: "Do my asssignments!" },
    { id: 3, title: "Go to market" },
    { id: 4, title: "Clean my room" },
    { id: 5, title: "Get a haircut" },
    { id: 6, title: "Pickup friend" },
    { id: 7, title: "Buy some snacks" },
  ];
  return (
    <motion.div
      className="font-poppins min-h-[100vh] w-[100vw] my-6 mx-auto grid justify-center place-content grid-rows-[max-content_max-content_auto] gap-y-4 text-center"
      initial={{ x: "100%", opacity: 0.5 }}
      animate={{ x: "0", opacity: 1 }}
      transition={{
        x: { delay: 1, duration: 1.3, type: "spring", bounce: 0.1 },
        opacity: { delay: 2, duration: 1.2 },
      }}
    >
      <h1 className="text-[2.5rem] md:text-[4rem] self-center lg:text-[4rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600 mb-10 md:mb-12 lg:mb-14">
        <Link to="/">To-do List App</Link>
      </h1>
      <CreateTodo />
      <div className="mx-2">
        <h2 className="text-left text-2xl bold text-slate-600 mb-4">
          Your Todos:{" "}
        </h2>
        <div className="grid gap-y-5">
          {todos.map((todo) => (
            <ToDo title={todo.title} key={todo.id} id={todo.id} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ToDos;
