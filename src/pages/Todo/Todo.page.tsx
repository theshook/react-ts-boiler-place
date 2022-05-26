import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ITodoState, useAddTodoMutation, useFetchTodosQuery } from "services";
import { TodoFetchSize } from "./components/TodoFetchSize";
import { TodoForm } from "./components/TodoForm";
import { TodoTable } from "./components/TodoTable";

export const Todo = () => {
	const [sizePerPage, setSizePerPage] = useState(10);
	const [todo, setTodo] = useState<Omit<ITodoState, "id">>({
		title: "",
		completed: false,
		userId: 0,
	});

	const [addTodo, { isLoading }] = useAddTodoMutation();
	const { data: todos = [], isFetching } = useFetchTodosQuery({
		_limit: sizePerPage,
	});

	const onSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		await addTodo(todo);
	};

	const handleChage = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		setTodo((prev) => ({
			...prev,
			[target.name]: target.value,
		}));
	};

	if (isFetching) return <h1>Loading...</h1>;

	return (
		<div>
			<p>
				<NavLink to="/">Home</NavLink>
			</p>

			<TodoForm
				todo={todo}
				handleChange={handleChage}
				onSubmit={onSubmit}
				isLoading={isLoading}
			/>

			<div>
				<TodoFetchSize
					todos={todos}
					sizePerPage={sizePerPage}
					setSizePerPage={setSizePerPage}
				/>
				<TodoTable todos={todos} />
			</div>
		</div>
	);
};
