import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Main from "./Main";
import ToDos from "./ToDos";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Main />} />
        <Route path="/todos" element={<ToDos />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
