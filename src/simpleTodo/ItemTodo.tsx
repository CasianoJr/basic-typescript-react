import React from "react";

interface Props {
  todo: Todo;
  todos: Array<Todo>;
  setTodos: (newTodo: Array<Todo>) => void;
}

export const ItemTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const handleToggle = (id: Number) => {
    const newTodos: Array<Todo> = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };
  const handleDelete = (id: number) => {
    const newTodos: Array<Todo> = todos.filter((todo) =>
      todo.id !== id ? true : false
    );
    setTodos(newTodos);
  };

  return (
    <li style={{ listStyleType: "none" }}>
      <label>
        <input
          type="checkbox"
          onChange={() => handleToggle(todo.id)}
          checked={todo.completed ? true : false}
        />
        {todo.title} <button onClick={() => handleDelete(todo.id)}>X</button>
      </label>
    </li>
  );
};
