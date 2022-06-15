import React from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import { RefreshContext } from "./RefreshContext";

const App = () => {
  const [refresh, setRefresh] = React.useState(true);
  return (
    <BrowserRouter>
      <RefreshContext.Provider value={[refresh, setRefresh]}>
        <AnimatedRoutes />
      </RefreshContext.Provider>
    </BrowserRouter>
  );
};

export default App;
