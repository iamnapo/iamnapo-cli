#!/usr/bin/env node

import React from "react";
import meow from "meow";
import { render, Text, Box, useApp } from "ink";
import terminalLink from "terminal-link";
import chalk from "chalk";
import SelectInputModule from "ink-select-input";
import open from "open";

meow(`
  Usage
    $ iamnapo
`, { importMeta: import.meta });

const SelectInput = SelectInputModule.default;

const App = () => {
	const { exit } = useApp();
	const items = [
		{ label: "Website", value: "https://iamnapo.me" },
		{ label: "GitHub", value: "https://iamnapo.me/gh" },
		{ label: "LinkedIn", value: "https://iamnapo.me/li" },
		{ label: "Contact", value: "mailto:hi@iamnapo.me" },
		{ label: "Twitter", value: "https://iamnapo.me/tw" },
		{ label: "Quit", key: "quit", action: exit },
	];
	const handleSelect = React.useCallback((item) => {
		if (item.value) open(item.value);
		if (item.action) item.action();
	}, []);

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

render(<App />);
