interface ItemProps {
	name: string;
}

export default function SidebarItem(props: ItemProps) {
	return (
		<li>
			<a
				href="#"
				className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
			>
				<span className="ml-3">{props.name}</span>
			</a>
		</li>
	);
}
