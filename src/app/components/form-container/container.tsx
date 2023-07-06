import ControlTypes from "@/app/utility/ControlTypes";
import { Types } from "../../components/sidebar/sidebar";
import { FC } from "react";
import { useDrop } from "react-dnd";

export interface ContainerProps {
	allowedDropEffect: string;
	types: Types[];
}

const allowedTypes: string[] = [];

export const Container: FC<ContainerProps> = ({ allowedDropEffect, types }) => {
	types.forEach((t) => {
		allowedTypes.push(t.type);
	});

	const [{ canDrop, isOver }, drop] = useDrop(
		() => ({
			accept: [...allowedTypes],
			drop: () => ({
				name: `${allowedDropEffect} Dustbin`,
				allowedDropEffect,
			}),
			collect: (monitor: any) => ({
				isOver: monitor.isOver(),
				canDrop: monitor.canDrop(),
			}),
		}),
		[allowedDropEffect]
	);

	return (
		<div
			ref={drop}
			className="h-full px-3 py-4 overflow-y-scroll bg-gray-10 dark:bg-gray-600"
		>
			&nbsp;
		</div>
	);
};
