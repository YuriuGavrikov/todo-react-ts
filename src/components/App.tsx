import { useState, useEffect } from "react";
import { useLocalStorage } from "./../hooks/useLocalStorage";

import { TodoList } from "./TodoList";
import { Form } from "./Form";
import { ITodo } from "../types/data";

import moment from "moment";

import styles from "./App.module.scss";

export const App: React.FC = () => {
	const [value, setValue] = useState<string>("");
	const [order, setOrder] = useLocalStorage([], "order");
	const [todos, setTodos] = useState<ITodo[]>(order);

	useEffect(() => {
		setOrder(todos);
	}, [setOrder, todos]);

	const addTodo = () => {
		if (value) {
			setTodos([
				...todos,
				{
					id: Date.now(),
					title: value,
					complete: false,
					date: moment().format("DD.MM.YY"),
				},
			]);
			setValue("");
		}
	};
	const removeTodo = (id: number): void => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const toggleTodo = (id: number): void => {
		setTodos(
			todos.map((todo) => {
				if (todo.id !== id) return todo;
				return {
					...todo,
					complete: !todo.complete,
				};
			})
		);
	};

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setValue(e.target.value);
	};
	const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (e.key === "Enter") addTodo();
	};
	return (
		<div className={styles.container}>
			<div className={styles.title}>To-Do List</div>
			<Form
				handleChange={handleChange}
				handleKeyDown={handleKeyDown}
				addTodo={addTodo}
				value={value}
			/>
			{todos.length ? (
				<TodoList
					items={todos}
					removeTodo={removeTodo}
					toggleTodo={toggleTodo}
				/>
			) : (
				<span className={styles.textNoneTodo}>Здесь пока ничего нет</span>
			)}
		</div>
	);
};
