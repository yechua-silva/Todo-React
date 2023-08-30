import { Droppable, Draggable } from "@hello-pangea/dnd";

import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
	return (
		<Droppable droppableId='todos'>
			{(droppableProvided) => (
				<div
					ref={droppableProvided.innerRef}
					{...droppableProvided.droppableProps}
					className='bg-white rounded-t-md mt-8 overflow-hidden transition-all duration-300 dark:bg-gray-800'
				>
					{todos.map((todo, index) => (
						<Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
							{(draggableProvided) => (
								<TodoItem
									todo={todo}
									removeTodo={removeTodo}
									updateTodo={updateTodo}
									ref={draggableProvided.innerRef}
									{...draggableProvided.dragHandleProps}
									{...draggableProvided.draggableProps}
								/>
							)}
						</Draggable>
					))}
					{droppableProvided.placeholder}
				</div>
			)}
		</Droppable>
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
