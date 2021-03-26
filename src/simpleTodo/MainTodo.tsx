import React, { useState } from "react";
import { AddTodo } from "./AddTodo";
import { ItemTodo } from "./ItemTodo";

export const MainTodo: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>([
    { title: "Hello", completed: false, id: 1 },
    { title: "World", completed: true, id: 2 },
  ]);

  return (
    <>
      <AddTodo setTodos={setTodos} todos={todos} />
      {todos.map((todo) => (
          //Delete and Toogle is handled in ItemTodo
        <ItemTodo todo={todo} setTodos={setTodos} todos={todos} />
      ))}
    </>
  );
};
