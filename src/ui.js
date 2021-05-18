const React = require("react"); // eslint-disable-line no-unused-vars
const { Text, Box, useApp } = require("ink");
const SelectInput = require("ink-select-input").default;
const terminalLink = require("terminal-link");
const open = require("open");
const chalk = require("chalk");

const handleSelect = (item) => {
	if (item.value) open(item.value);
	if (item.action) item.action();
};

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

	return (
		<Box flexDirection="column">
			<Text color="#008B8B" bold>{"Hello! I’m Napoleon-Christos Oikonomou. 😎"}</Text>
			<Box marginBottom={1}>
				<Text>
					{`I’m an Electrical & Computer Engineer and Software Developer, currently working\nas a Software Engineer at the ${
						terminalLink(chalk.cyan("Intelligent Systems & Software Engineering Labgroup"), "https://issel.ee.auth.gr/")
					}\nand at ${terminalLink(chalk.blue("Cyclopt"), "https://cyclopt.com/")}, as their Lead Software Engineer.`}
				</Text>
			</Box>
			<SelectInput items={items} onSelect={handleSelect} />
		</Box>
	);
};

module.exports = App;
