import { FC } from "react";

interface InputProps {
	id: string;
	placeholder: string;
	labelText: string;
}

export const TextArea: FC<InputProps> = ({ id, placeholder, labelText }) => {
	return (
		<div className="py-3">
			<label
				className="block text-gray-700 text-sm font-bold mb-2"
				htmlFor={id}
			>
				{labelText}
			</label>
			<textarea
				className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id={id}
				placeholder={placeholder}
			></textarea>
		</div>
	);
};
