import { useRef } from "react";

import styles from "./Form.module.scss";

interface IForm {
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	addTodo: () => void;
	value: string;
}

export const Form: React.FC<IForm> = (props) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const { handleChange, handleKeyDown, addTodo, value } = props;
	return (
		<>
			<div className={styles.header}>
				<input
					className={styles.input}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
					value={value}
					ref={inputRef}
					placeholder="Введите текст"
				/>
				<button className={styles.inputBtn} onClick={addTodo}>
					Добавить
				</button>
			</div>
		</>
	);
};
