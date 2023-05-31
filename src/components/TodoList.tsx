import { TodoItem } from "./TodoItem";

import { ITodo } from "../types/data";

interface ITodoList {
	items: ITodo[];
	removeTodo: (id: number) => void;
	toggleTodo: (id: number) => void;
}

export const TodoList: React.FC<ITodoList> = (props) => {
	const { items, removeTodo, toggleTodo } = props;
	return (
		<>
			{items.map((todo) => (
				<TodoItem
					key={todo.id}
					removeTodo={removeTodo}
					toggleTodo={toggleTodo}
					{...todo}
				/>
			))}
		</>
	);
};
