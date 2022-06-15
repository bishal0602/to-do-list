import React from "react";
import axios from "axios";
import { FiArrowRightCircle } from "react-icons/fi";
import { RefreshContext } from "../RefreshContext";

const API_URL = "https://todolistexpressapi.herokuapp.com/createtodo";

const CreateTodo = () => {
  const [refresh, setRefresh] = React.useContext(RefreshContext);
  const createtodo = () => {
    const todo = document.getElementById("todo").value;
    // console.log(todo);
    if (todo === "" || todo === " " || todo === undefined || todo === null) {
      return;
    }
    // console.log("Test");
    axios
      .post(API_URL, {
        todo: todo,
      })
      .then((response) => {
        // console.log(response.data);
        setRefresh((preVal) => !preVal);
        document.getElementById("todo").value = "";
      })
      .catch((error) => {
        console.log(`POST request failed: ${error}`);
      });
  };
  return (
    <div className="h-[3rem] w-[90%] self-center mx-auto flex items-center justify-between text-xl text-center mb-8 border-2 border-solid border-violet-400 rounded-xl shadow-sm shadow-purple-300">
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="Enter To-do"
        className="h-4/5 w-[87%] p-2 border-none bg-transparent select-text"
      ></input>
      <FiArrowRightCircle
        className="h-4/5 w-[10%] text-violet-500 hover:text-pink-600 cursor:pointer"
        onClick={createtodo}
      />
    </div>
  );
};

export default CreateTodo;
