import { Select, type Option } from "@inkjs/ui";
import { Box, Text, useApp } from "ink";
import open from "open";
import terminalLink from "terminal-link";

const Index = () => {
	const { exit } = useApp();
	const options: Option[] = [
		{ label: "Website", value: "https://iamnapo.me" },
		{ label: "GitHub", value: "https://iamnapo.me/gh" },
		{ label: "LinkedIn", value: "https://iamnapo.me/li" },
		{ label: "Napo Should Contact Me", value: "mailto:b**t@c**o.h***th" },
		{ label: "Twitter", value: "https://iamnapo.me/tw" },
		{ label: "Quit", value: "quit" },
	];

	return (
		<>
			<Box flexDirection="column" marginBottom={1}>
				<Text bold color="#008B8B">
					{"Hello! I’m Napoleon-Christos Oikonomou. 😎"}
				</Text>
				<Text>
					{`I’m an Electrical & Computer Engineer and Software Developer, currently working\nas a Senior Software Engineer at ${terminalLink("Persado", "https://persado.com")}.`}
				</Text>
			</Box>
			<Select
				options={options}
				visibleOptionCount={options.length}
				onChange={(value) => {
					if (value === "quit") {
						void exit();
					} else {
						void open(value);
					}
				}}
			/>
		</>
	);
};

export default Index;
