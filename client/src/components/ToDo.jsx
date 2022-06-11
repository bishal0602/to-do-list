import React from "react";
import { MdOutlineDoneOutline } from "react-icons/md";

const ToDo = ({ title, key, id }) => {
  return (
    <div
      className="group self-top justify-self-center flex items-center justify-start text-slate-700 min-h-[2.5rem] w-[90%] border-2 border-solid border-purple-500 rounded-xl shadow-md  hover:text-black hover:shadow-purple-500"
      key={key}
      id={id}
      onClick={() => alert("Sorry the feature is not ready yet:(")}
    >
      <MdOutlineDoneOutline
        size={20}
        className="ml-2 group-hover:text-lime-700 group-hover:scale-110 "
      />
      <h1 className="ml-2 text-left  ">{title}</h1>
    </div>
  );
};

export default ToDo;
