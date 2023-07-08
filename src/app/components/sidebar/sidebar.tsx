"use client";

import { SubmitButton } from "../controls/SubmitButton";
import SidebarItem from "./sidebar-item";
import { FC } from "react";

export interface Types {
	name: string;
	type: string;
}

export interface SidebarProps {
	types: Types[];
	className: string;
}

export const Sidebar: FC<SidebarProps> = ({ types, className }) => {
	return (
		<div
			className={
				"top-0 left-0 w-1/6 flex flex-col items-center h-screen transition-transform -translate-x-full sm:translate-x-0 bg-gray-50 dark:bg-gray-800 " +
				className
			}
			aria-label="Sidebar"
		>
			<div className="flex h-5/6 w-5/6 px-3 py-4 overflow-y-auto border-b-4 border-gray-500">
				<ul className="flex flex-col w-full space-y-2 font-medium">
					{types.map(function (type, i) {
						return (
							<SidebarItem
								key={"sidebarItem-" + i}
								name={type.name}
								type={type.type}
							></SidebarItem>
						);
					})}
				</ul>
			</div>
			<div className="content-end h-1/6 w-5/6">
				<SubmitButton className="w-full bg-green-800" text="Submit" />
			</div>
		</div>
	);
};

export default Sidebar;
