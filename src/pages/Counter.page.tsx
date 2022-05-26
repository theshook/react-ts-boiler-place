import React from "react";
import { useAppDispatch, useAppSelector } from "hooks";
import { increment, decrement, reset } from "slice/Counter.slice";
import { NavLink } from "react-router-dom";

export const CounterPage = () => {
	const count = useAppSelector((state) => state.counter.value);
	const dispatch = useAppDispatch();

	return (
		<div>
			<NavLink to="/">Home</NavLink>
			<div>
				CounterPage
				<p>count is: {count}</p>
			</div>
			<button name="increment" onClick={() => dispatch(increment())}>
				+
			</button>
			<button name="decrement" onClick={() => dispatch(decrement())}>
				-
			</button>
			<button name="reset" onClick={() => dispatch(reset())}>
				reset
			</button>
		</div>
	);
};
