const React = require('react');
const { Text, Box } = require('ink');
const SelectInput = require('ink-select-input').default;
const terminalLink = require('terminal-link');
const opn = require('opn');
const chalk = require('chalk');

const open = url => opn(url, { wait: false });

const handleSelect = (item) => {
  if (item.value) open(item.value);
  if (item.action) item.action();
};

const items = [
  { label: 'Website', value: 'https://iamnapo.me' },
  { label: 'GitHub', value: 'https://github.com/iamnapo' },
  { label: 'LinkedIn', value: 'https://linkedin.com/in/iamnapo' },
  { label: 'Contact', value: 'mailto:napoleonoikon@gmail.com' },
  { label: 'Facebook', value: 'https://facebook.com/napohotline' },
  { label: 'Twitter', value: 'https://twitter.com/_iamnapo' },
  { label: 'Quit', value: 'quit', action() { process.exit(); } },
];

const ui = () => (
  <Box flexDirection="column">
    <Text>{chalk.hex('#008B8B').bold('Hello! I’m Napoleon-Christos Oikonomou. 😎')}</Text>
    <Box flexDirection="column">
      <Text>I’m an Electrical &amp; Computer Engineer and Software Developer, currently working</Text>
      <Text>
        {'as a Software Engineer at the '}
        {terminalLink(chalk.cyan('Intelligent Systems & Software Engineering Labgroup'), 'https://issel.ee.auth.gr/')}
        {'.\n'}
      </Text>
    </Box>
    <SelectInput items={items} onSelect={handleSelect} />
  </Box>
);

module.exports = ui;
