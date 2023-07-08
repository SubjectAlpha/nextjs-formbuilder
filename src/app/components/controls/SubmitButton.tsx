import { FC, MouseEventHandler } from "react";

interface InputProps {
	text: string;
	clickHandler?: MouseEventHandler;
	className?: string;
}

export const SubmitButton: FC<InputProps> = ({
	text,
	clickHandler,
	className,
}) => {
	return (
		<div className="py-3">
			<button
				className={
					"bg-blue-500 inset-x-0 bottom-0 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " +
					className
				}
				type="button"
				onClick={clickHandler}
			>
				{text}
			</button>
		</div>
	);
};
