import React from "react";
import { motion } from "framer-motion";
import CreateTodo from "./components/CreateTodo";
import axios from "axios";
import { useState, useEffect } from "react";
import ToDo from "./components/ToDo";
import { Link } from "react-router-dom";
import { RefreshContext } from "./RefreshContext";

const ToDos = () => {
  //Getting Todos from API

  const [refresh, setRefresh] = React.useContext(RefreshContext);

  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("https://todolistexpressapi.herokuapp.com/gettodos")
      .then((res) => {
        // console.log(res.data);
        setTodos(res.data);
        // console.log(todos[0]._id);
      })
      .catch((error) => {
        console.log(`GET request failed: ${error}`);
      });
  }, [, refresh]);

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
        {todos.length > 0 ? (
          <div className="grid gap-y-5">
            {todos.map((todo) => (
              <ToDo title={todo.todo} id={todo._id} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
            className="grid place-items-center"
          >
            <h3 className="text-purple-800 my-4 text-lg md:text-xl">
              Looks like you have no to-dos !<br />
              Add one!
            </h3>
            <img src="emptyboxandshelf.svg" alt="Empty" className="w-4/5" />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ToDos;
