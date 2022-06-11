import React from "react";

const CreateTodo = () => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter To-do"
        className="w-full h-[3rem] self-center text-2xl border-2 border-solid border-blue-400 rounded-2xl placeholder:px-2"
      ></input>
    </>
  );
};

export default CreateTodo;
