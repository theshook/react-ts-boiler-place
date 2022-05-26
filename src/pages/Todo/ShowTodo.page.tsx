import { TodoConstants } from "constant";
import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useFetchTodoQuery } from "services";

export const ShowTodo = () => {
	const { id } = useParams<{ id: string }>();
	const { data: todo, isLoading } = useFetchTodoQuery(id);

	if (isLoading) return <h1>Loading...</h1>;

	return (
		<div>
			<NavLink to={TodoConstants.TODO}>Go Back</NavLink>
			<p>Id: {todo?.id}</p>
			<p>Title: {todo?.title}</p>
			<p>UserID: {todo?.userId}</p>
			<p>completed: {String(todo?.completed)}</p>
		</div>
	);
};
