"use client";

import ControlTypes from "@/app/utility/ControlTypes";
import { FC } from "react";
import type { DragSourceMonitor } from "react-dnd";
import { useDrag } from "react-dnd";

interface ItemProps {
	name: string;
	type: string;
}

interface DropResult {
	allowedDropEffect: string;
	dropEffect: string;
	name: string;
}

export const SidebarItem: FC<ItemProps> = ({ name, type }) => {
	const [o, drag] = useDrag(
		() => ({
			type: type,
			item: { name },
			end(item, monitor) {
				const dropResult = monitor.getDropResult() as DropResult;
				if (item && dropResult) {
					let alertMessage = "";
					const isDropAllowed =
						dropResult.allowedDropEffect === "any" ||
						dropResult.allowedDropEffect === dropResult.dropEffect;

					if (isDropAllowed) {
						const isCopyAction = dropResult.dropEffect === "copy";
						const actionName = isCopyAction ? "copied" : "moved";
						alertMessage = `You ${actionName} ${item.name} into ${dropResult.name}!`;
					} else {
						alertMessage = `You cannot ${dropResult.dropEffect} an item into the ${dropResult.name}`;
					}
					console.log(alertMessage);
				}
			},
			collect: (monitor: DragSourceMonitor) => ({
				opacity: monitor.isDragging() ? 0.4 : 1,
			}),
		}),
		[name]
	);

	return (
		<li>
			<div
				ref={drag}
				className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
			>
				<span className="ml-3">{name}</span>
			</div>
		</li>
	);
};

export default SidebarItem;
