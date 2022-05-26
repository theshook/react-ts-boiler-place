import React from "react";

type Props = {
	title: string;
	type: "reset" | "button" | "submit" | undefined;
	onClick?: React.MouseEventHandler<HTMLButtonElement>; 
}

export const AppButton = ({title, type = "submit", onClick}: Props) => (
	<button type={type} onClick={onClick}>{title}</button>
);
