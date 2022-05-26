import { TodoConstants } from "constant";
import { NavLink } from "react-router-dom";
import { ITodoState } from "services";

type Props = {
	todo: ITodoState;
};
export const TodoTableCell = ({ todo }: Props) => {
	return (
		<tr key={todo.id}>
			<td>{todo.title}</td>
			<td>{todo.userId}</td>
			<td>{String(todo.completed)}</td>
			<td>
				<NavLink to={TodoConstants.SHOW_TODO.replace(":id", String(todo.id))}>
					show
				</NavLink>
				<button>edit</button>
				<button>delete</button>
			</td>
		</tr>
	);
};
