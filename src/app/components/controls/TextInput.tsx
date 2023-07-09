import { FC } from "react";
import { DeleteButton } from "./DeleteButton";

interface InputProps {
	id: string;
	placeholder: string;
	labelText?: string;
}

export const TextInput: FC<InputProps> = ({ id, placeholder, labelText }) => {
	return (
		<div className="flex py-3">
			<div className="flex flex-col w-full">
				<label
					className="block text-gray-700 text-sm font-bold mb-2"
					htmlFor={id}
				>
					{labelText}
				</label>
				<input
					className="shadow appearance-none border rounded w-5/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id={id}
					type="text"
					placeholder={placeholder}
				></input>
			</div>
			<DeleteButton text="Delete" />
		</div>
	);
};
