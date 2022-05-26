import React from "react";
import { capitalizeFirstLetter } from "utils/helper";

type Props = {
	value?: string | number;
	name: string;
  label?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export const AppTextField = ({ value, name, onChange, label }: Props) => (
	<>
		<label htmlFor={name}>{capitalizeFirstLetter(label)}</label>
		<input type="text" value={value} name={name} onChange={onChange} />
	</>
);
