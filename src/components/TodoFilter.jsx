/* eslint-disable prettier/prettier */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/self-closing-comp */
import PropTypes from "prop-types";

const TodoFilter = ({ changeFilter, filter }) => {
  return (
    <section className="container mx-auto  mt-8">
      <div className="bg-white dark:bg-gray-800  p-4 rounded-md flex justify-center gap-4 transition-all duration-300">
        <button
          type="button"
          className={`${
            filter === "all"
              ? "text-blue-500 hover:text-gray-400"
              : "text-gray-400 hover:text-blue-500"
          }`}
          onClick={() => changeFilter("all")}
        >
          All
        </button>
        <button
          type="button"
          className={`${
            filter === "active"
              ? "text-blue-500 hover:text-gray-400"
              : "text-gray-400 hover:text-blue-500"
          }`}
          onClick={() => changeFilter("active")}
        >
          Active
        </button>
        <button
          type="button"
          className={`${
            filter === "completed"
              ? "text-blue-500 hover:text-gray-400"
              : "text-gray-400 hover:text-blue-500"
          }`}
          onClick={() => changeFilter("completed")}
        >
          Completed
        </button>
      </div>
    </section>
  );
};

TodoFilter.porpTypes = {
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default TodoFilter;
