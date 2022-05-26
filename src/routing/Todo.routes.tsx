import React from "react";
import { Route } from "react-router-dom";
import { ShowTodo, Todo } from "pages";
import { TodoConstants } from "constant";

const TodoRoutes = () => [
	<Route key="todo" path={TodoConstants.TODO} element={<Todo />} />,
	<Route
		key="todo-w-id"
		path={TodoConstants.SHOW_TODO}
		element={<ShowTodo />}
	/>,
];

export default TodoRoutes;
