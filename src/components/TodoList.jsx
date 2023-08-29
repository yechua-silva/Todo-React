import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
	return (
		<div className='bg-white rounded-t-md mt-8 overflow-hidden transition-all duration-300 dark:bg-gray-800'>
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					removeTodo={removeTodo}
					updateTodo={updateTodo}
				/>
			))}
		</div>
	);
};

TodoList.propTypes = {
	todos: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
			completed: PropTypes.bool.isRequired,
		})
	).isRequired,
	removeTodo: PropTypes.func.isRequired,
	updateTodo: PropTypes.func.isRequired,
};

export default TodoList;
