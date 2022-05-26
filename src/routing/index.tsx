import React from "react";
import { CounterPage } from "pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../pages/Home/App";
import TodoRoutes from "./Todo.routes";

export const RoutesProvider = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/counter" element={<CounterPage />} />
				{TodoRoutes()}
			</Routes>
		</BrowserRouter>
	);
};
