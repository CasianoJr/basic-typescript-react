import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";
import { NavBar } from "./shared/NavBar";
import { ReduxProvider } from "./store/ReduxProvider";

const App: React.FC = () => {
  return (
    <>
      {/* <h3>Hello Typescript</h3>
      <MainTodo />
    <hr/> */}
      <ReduxProvider>
        <BrowserRouter>
          <div className="text-center">
            <NavBar />
            <Routes />
          </div>
        </BrowserRouter>
      </ReduxProvider>
    </>
  );
};

export default App;
