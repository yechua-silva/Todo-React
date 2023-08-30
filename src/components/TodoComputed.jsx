import PropTypes from "prop-types";

const TodoComputed = ({ clearCompleted, nroTodos }) => {
	return (
		<section
			className={`dark:bg-gray-800 transition-all duration-300 p-4 flex justify-between bg-white
        ${nroTodos ? " rounded-b-md " : "rounded-md "}`}
		>
			<span className='text-gray-400'>{nroTodos} items left</span>
			<button type='button' className='text-gray-400' onClick={clearCompleted}>
				Clear Complete
			</button>
		</section>
	);
};

TodoComputed.propTypes = {
	clearCompleted: PropTypes.func.isRequired,
	nroTodos: PropTypes.number.isRequired,
};
export default TodoComputed;
