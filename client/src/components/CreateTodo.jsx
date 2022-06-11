import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";

const CreateTodo = () => {
  return (
    <div className="h-[3rem] w-[90%] self-center mx-auto flex items-center justify-between text-xl text-center mb-8 border-2 border-solid border-violet-400 rounded-xl shadow-lg shadow-purple-300">
      <input
        type="text"
        placeholder="Enter To-do"
        className="h-4/5 w-[87%] p-2 border-none bg-transparent"
      ></input>
      <FiArrowRightCircle
        className="h-4/5 w-[10%] text-violet-500 hover:text-green-500"
        onClick={() => alert("Sorry the feature is not ready yet:(")}
      />
    </div>
  );
};

export default CreateTodo;
