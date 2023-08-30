/* eslint-disable react/display-name */
import PropTypes from "prop-types";
import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";
import React from "react";

const TodoItem = React.forwardRef(
	({ todo, removeTodo, updateTodo, ...props }, ref) => {
		return (
			<article
				ref={ref}
				{...props}
				className='flex gap-4  border-b-gray-400 border-b p-4 dark:bg-gray-800 bg-white'
			>
				<button
					type='button'
					className={`rounded-full inline-block border-2 w-5 h-5 ${
						todo.completed
							? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center"
							: "inline-block"
					}`}
					onClick={() => updateTodo(todo.id)}
				>
					{todo.completed && <IconCheck />}
				</button>

				<p
					className={`text-gray-600 dark:text-gray-400 grow ${
						todo.completed && "line-through"
					}`}
				>
					{/* {todo.title} */}
					{todo ? todo.title : "Agrega una Tarea"}
				</p>
				<button
					type='button'
					className='flex-none'
					onClick={() => removeTodo(todo.id)}
				>
					<IconCross className='dark:fill-gray-400' />
				</button>
			</article>
		);
	}
);

TodoItem.propTypes = {
	todo: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired,
	}).isRequired,
	removeTodo: PropTypes.func.isRequired,
	updateTodo: PropTypes.func.isRequired,
};

export default TodoItem;
