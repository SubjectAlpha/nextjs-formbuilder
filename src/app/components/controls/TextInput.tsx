import { FC, Fragment } from "react";

interface InputProps {
	id: string;
	placeholder: string;
	labelText: string;
	keyName: string;
}

export const TextInput: FC<InputProps> = ({
	id,
	placeholder,
	labelText,
	keyName,
}) => {
	return (
		<Fragment key={keyName}>
			<label
				className="block text-gray-700 text-sm font-bold mb-2"
				htmlFor={id}
			>
				{labelText}
			</label>
			<input
				className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id={id}
				type="text"
				placeholder={placeholder}
			></input>
		</Fragment>
	);
};
