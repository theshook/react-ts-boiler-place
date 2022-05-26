import { AppButton, AppTextField } from "components";
import { ITodoState } from "services";

type Props = {
	onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
	isLoading: boolean;
	handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
	todo: Omit<ITodoState, "id">;
};
export const TodoForm = ({
	onSubmit,
	isLoading,
	todo,
	handleChange,
}: Props) => (
	<form onSubmit={onSubmit}>
		{isLoading && <span>Adding Todos</span>}

		<AppTextField
			value={todo.title}
			name="title"
			onChange={handleChange}
			label="Title: "
		/>

		<AppTextField
			value={todo.userId}
			name="userId"
			onChange={handleChange}
			label="User Id: "
		/>

		<AppButton title="Add Todo" type="submit" />
	</form>
);
