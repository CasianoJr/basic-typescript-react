import React from "react";
import { MainTodo } from "./simpleTodo/MainTodo";

const App: React.FC = () => {
  return (
    <div className="text-center">
      <h3>Hello Typescript</h3>
      <MainTodo />
    </div>
  );
};

export default App;
