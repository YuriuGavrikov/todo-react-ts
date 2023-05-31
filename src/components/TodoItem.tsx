import { ITodo } from "../types/data";

import styles from "./TodoItem.module.scss";

interface ITodoItem extends ITodo {
	removeTodo: (id: number) => void;
	toggleTodo: (id: number) => void;
}

export const TodoItem: React.FC<ITodoItem> = (props) => {
	const { id, title, complete, date, removeTodo, toggleTodo } = props;

	return (
		<div className={styles.container}>
			<div className="mt-check-garden" style={{ fontSize: "7px" }}>
				<input
					id={`${id}`}
					type="checkbox"
					checked={complete}
					onChange={() => toggleTodo(id)}
				/>
				<label htmlFor={`${id}`}></label>
			</div>
			<span
				className={[
					styles.text,
					complete ? styles.textLine : styles.textNoLine,
				].join(" ")}
			>
				{title}
			</span>
			<span>|</span>
			<span className={styles.date}>{date}</span>
			<div>
				<button className={styles.btn} onClick={() => removeTodo(id)} />
			</div>
		</div>
	);
};
