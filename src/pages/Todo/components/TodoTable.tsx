import { ITodoState } from "services";
import { TodoTableCell } from "./TodoTableCell";

type Props = {
	todos: ITodoState[];
};
export const TodoTable = ({ todos }: Props) => (
	<table>
		<thead>
			<tr>
				<th>Title</th>
				<th>User_id</th>
				<th colSpan={2}>Completed</th>
			</tr>
		</thead>
		<tbody>
			{todos.map((todo) => (
				<TodoTableCell todo={todo} />
			))}
		</tbody>
	</table>
);
