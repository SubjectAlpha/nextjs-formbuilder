import { Fragment } from "react";
import Sidebar from "./components/sidebar/sidebar";
import path from "path";
import { promises as fs } from "fs";
import { json } from "stream/consumers";

const types: string[] = ["TextView", "TextInput", "TextArea", "Button"];

export default function Main() {
	return (
		<Fragment>
			<Sidebar types={types} />
			<main>Test</main>
		</Fragment>
	);
}
