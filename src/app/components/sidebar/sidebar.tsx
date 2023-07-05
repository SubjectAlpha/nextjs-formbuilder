import SidebarItem from "./sidebar-item";

interface SidebarProps {
	types: string[];
}

export default function Sidebar(props: SidebarProps) {
	return (
		<aside
			className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
			aria-label="Sidebar"
		>
			<div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
				<ul className="space-y-2 font-medium">
					{props.types.map(function (type, i) {
						return <SidebarItem name={type}></SidebarItem>;
					})}
				</ul>
			</div>
		</aside>
	);
}
