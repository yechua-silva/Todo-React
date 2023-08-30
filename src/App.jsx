import "./utils/darkMode";

import { DragDropContext } from "@hello-pangea/dnd";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const reorder = (list = [], startIndex, endIndex) => {
	const result = [...list];
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);

	return result;
};

function App() {
	const [todos, setTodos] = useState(initialStateTodos);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const createTodo = (title) => {
		// Creacion del todo
		const newTodo = {
			id: Date.now(),
			title: title.trim(),
			completed: false,
		};

		// Copiar y añadir nuevo todo
		setTodos([...todos, newTodo]);
	};

	const removeTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const updateTodo = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};

	const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

	const clearCompleted = () => {
		setTodos(todos.filter((todo) => !todo.completed));
	};

	const [filter, setFilter] = useState("all");

	const filterTodos = () => {
		switch (filter) {
			case "all":
				return todos;
			case "active":
				return todos.filter((todo) => !todo.completed);
			case "completed":
				return todos.filter((todo) => todo.completed);
			default:
				break;
		}
	};

	const changeFilter = (filter) => setFilter(filter);

	const nroTodos = filterTodos().length;

	const handleDragEnd = (result) => {
		const { destination, source } = result;
		if (!destination) return;
		if (
			source.index === destination.index &&
			source.droppableId === destination.droppableId
		)
			return;

		setTodos((prevTasks) =>
			reorder(prevTasks, source.index, destination.index)
		);
	};

	return (
		<div className="bg-[url('./assets/images/bg-mobile-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen dark:bg-gray-900 transition-all duration-300 md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
			<Header />

			<main className='container mx-auto px-4 mt-8 md:max-w-xl'>
				<TodoCreate createTodo={createTodo} />

				<DragDropContext onDragEnd={handleDragEnd}>
					<TodoList
						todos={filterTodos()}
						removeTodo={removeTodo}
						updateTodo={updateTodo}
						computedItemsLeft={computedItemsLeft}
					/>
				</DragDropContext>

				<TodoComputed
					computedItemsLeft={computedItemsLeft}
					clearCompleted={clearCompleted}
					nroTodos={nroTodos}
				/>

				<TodoFilter changeFilter={changeFilter} filter={filter} />
			</main>

			<footer className='text-center mt-8 dark:text-gray-300 transition-all duration-300'>
				Drag and drop to reorder list
			</footer>
		</div>
	);
}

export default App;
