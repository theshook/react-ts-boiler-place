import React from "react";
import { ITodoState } from "services";

type Props = {
	sizePerPage: number;
	setSizePerPage: (value: number) => void;
	todos: ITodoState[];
};

export const TodoFetchSize = ({
	sizePerPage,
	setSizePerPage,
	todos,
}: Props) => {
	return (
		<>
			<span>Todos to fetch: </span>
			<select
				value={sizePerPage}
				onChange={(e) => setSizePerPage(Number(e.target.value))}
			>
				<option value="5">5</option>
				<option value="10">10</option>
				<option value="15">15</option>
				<option value="20">20</option>
				<option value="25">25</option>
				<option value="-1">all</option>
			</select>
			<p>
				Number of completed todos:{" "}
				{todos.filter((todo) => todo.completed).length}
			</p>
		</>
	);
};
