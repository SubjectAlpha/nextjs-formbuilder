"use client";

import SidebarItem from "./sidebar-item";
import { FC } from "react";

export interface Types {
	name: string;
	type: string;
}

export interface SidebarProps {
	types: Types[];
}

export const Sidebar: FC<SidebarProps> = ({ types }) => {
	return (
		<aside
			className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
			aria-label="Sidebar"
		>
			<div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
				<ul className="space-y-2 font-medium">
					{types.map(function (type, i) {
						console.log(type);
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
		</aside>
	);
};

export default Sidebar;
