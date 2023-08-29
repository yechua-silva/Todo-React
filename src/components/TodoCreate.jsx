/* eslint-disable prettier/prettier */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/self-closing-comp */
import PropTypes from "prop-types";
import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmitAddTodo = (e) => {
    e.preventDefault();

    // Validar
    if (!title.trim()) {
      return setTitle("");
    }

    createTodo(title);
    // Pasar form a vacio
    return setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmitAddTodo}
      className="bg-white dark:bg-gray-800 rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 transition-all duration-300"
    >
      <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
      <input
        className="w-full text-gray-400  outline-none dark:bg-gray-800 transition-all duration-300"
        type="text"
        placeholder="Create a new todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

TodoCreate.propTypes = {
  createTodo: PropTypes.func.isRequired,
};

export default TodoCreate;
