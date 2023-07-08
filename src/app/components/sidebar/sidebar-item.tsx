"use client";

import ControlTypes from "@/app/utility/ControlTypes";
import { FC, useState } from "react";
import type { DragSourceMonitor } from "react-dnd";
import { useDrag } from "react-dnd";
import { TextInput } from "../controls/TextInput";
import { AddChild, GetChildrenCount } from "../form-container/container";
import { TextArea } from "../controls/TextArea";

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
					const isDropAllowed =
						dropResult.allowedDropEffect === "any" ||
						dropResult.allowedDropEffect === dropResult.dropEffect;

					if (isDropAllowed) {
						placeComponent(type);
					} else {
						alert("Drop failed");
					}
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
				className="flex w-full content-center p-2 text-gray-900 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 group"
			>
				<span>{name}</span>
			</div>
		</li>
	);
};

function placeComponent(type: string) {
	switch (type) {
		case "textInput":
			AddChild(
				<TextInput
					id="test"
					placeholder="test"
					labelText="label"
					key={"userAddedComponent-" + GetChildrenCount()}
				/>
			);
			break;
		case "textArea":
			AddChild(
				<TextArea
					id="test"
					placeholder="test"
					labelText="label"
					key={"userAddedComponent-" + GetChildrenCount()}
				/>
			);
			break;
	}
}

export default SidebarItem;
