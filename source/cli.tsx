#!/usr/bin/env node

import meow from "meow";
import { render, Text, Box, useApp } from "ink";
import terminalLink from "terminal-link";
import chalk from "chalk";
import SelectInput from "ink-select-input";
import open from "open";

meow(`
  Usage
    $ iamnapo
`, { importMeta: import.meta });

const handleSelect = (item: { value: string; action?: () => void }): void => {
	if (item.action) item.action();
	if (item.value) void open(item.value);
};

const App = () => {
	const { exit } = useApp();
	const items = [
		{ label: "Website", value: "https://iamnapo.me" },
		{ label: "GitHub", value: "https://iamnapo.me/gh" },
		{ label: "LinkedIn", value: "https://iamnapo.me/li" },
		{ label: "Contact", value: "mailto:hi@iamnapo.me" },
		{ label: "Twitter", value: "https://iamnapo.me/tw" },
		{ label: "Quit", value: "quit", action: exit },
	];

	return (
		<Box flexDirection="column">
			<Text bold color="#008B8B">{"Hello! I’m Napoleon-Christos Oikonomou. 😎"}</Text>
			<Box marginBottom={1}>
				<Text>
					{`I’m an Electrical & Computer Engineer and Software Developer, currently working\nas a Lead Software Engineer at ${terminalLink(chalk.hex("#112e41")("TechNative"), "https://technative.gr/")}.`}
				</Text>
			</Box>
			<SelectInput
				items={items}
				onSelect={handleSelect}
			/>
		</Box>
	);
};

render(<App />);
