import ControlTypes from "@/app/utility/ControlTypes";
import { Types } from "../../components/sidebar/sidebar";
import { FC, ReactNode, useEffect, useState } from "react";
import { useDrop } from "react-dnd";

export interface ContainerProps {
	allowedDropEffect: string;
	types: Types[];
	className: string;
}

const allowedTypes: string[] = [];
const addedChildren: ReactNode[] = [];

export function AddChild(child: ReactNode) {
	addedChildren.push(child);
}

export function GetChildrenCount() {
	return addedChildren.length;
}

export const Container: FC<ContainerProps> = ({
	allowedDropEffect,
	types,
	className,
}) => {
	const [children, setChildren] = useState(addedChildren);

	useEffect(() => {
		// Refresh when children change
	}, [children]);

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
			className={
				"container h-full px-3 py-4 overflow-y-scroll bg-gray-10 dark:bg-gray-600 " +
				className
			}
		>
			{...children}
		</div>
	);
};
