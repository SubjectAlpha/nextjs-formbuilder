"use client";

import { FC } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Container } from "./components/form-container/container";
import Sidebar, { Types } from "./components/sidebar/sidebar";
import ControlTypes from "./utility/ControlTypes";

// Load and store all types to be used
const types: Types[] = [];
ControlTypes.forEach((t, k) => {
	types.push({
		name: k,
		type: t,
	});
});

export const Main: FC = () => {
	return (
		<DndProvider backend={HTML5Backend}>
			<main
				style={{
					height: "100vh",
				}}
			>
				<Sidebar types={types} />
				<Container types={types} allowedDropEffect="any" />
			</main>
		</DndProvider>
	);
};

export default Main;
