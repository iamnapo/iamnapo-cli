import { createRequire } from "node:module";

import { Text, Box, useApp } from "ink";
import terminalLink from "terminal-link";
import open from "open";
import chalk from "chalk";

const require = createRequire(import.meta.url);

const SelectInput = require("ink-select-input").default;

const handleSelect = (item) => {
	if (item.value) open(item.value);
	if (item.action) item.action();
};

const UI = () => {
	const { exit } = useApp();
	const items = [
		{ label: "Website", value: "https://iamnapo.me" },
		{ label: "GitHub", value: "https://iamnapo.me/gh" },
		{ label: "LinkedIn", value: "https://iamnapo.me/li" },
		{ label: "Contact", value: "mailto:hi@iamnapo.me" },
		{ label: "Twitter", value: "https://iamnapo.me/tw" },
		{ label: "Quit", key: "quit", action: exit },
	];

	return (
		<Box flexDirection="column">
			<Text bold color="#008B8B">{"Hello! I’m Napoleon-Christos Oikonomou. 😎"}</Text>
			<Box marginBottom={1}>
				<Text>
					{`I’m an Electrical & Computer Engineer and Software Developer, currently working\nas the Lead Software Engineer at ${terminalLink(chalk.blue("Cyclopt"), "https://cyclopt.com/")}.`}
				</Text>
			</Box>
			<SelectInput items={items} onSelect={handleSelect} />
		</Box>
	);
};

export default UI;
