import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";
import { NavBar } from "./shared/NavBar";
import { ReduxProvider } from "./store/ReduxProvider";

const App: React.FC = () => {
  return (
      <ReduxProvider>
        <BrowserRouter>
            <NavBar />
            <Routes />
        </BrowserRouter>
      </ReduxProvider>
  );
};

export default App;
