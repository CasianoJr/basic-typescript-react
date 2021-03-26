import React, { FormEvent } from "react";

interface Props {
  setTodos(newTodo: Array<Todo>): void;
  todos: Array<Todo>;
}

export const AddTodo: React.FC<Props> = ({ setTodos, todos }) => {
  const inputRef = React.useRef<HTMLInputElement | any>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputRef.current.value === "") return;
    const newTodo: Todo = {
      title: inputRef.current.value,
      id: Math.floor(Math.random() * 99999),
      completed: false,
    };
    setTodos([...todos, newTodo]);
    // setTodos((prevVal) => [...prevVal, newTodo ])
    inputRef.current.value = "";
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} placeholder="input text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
