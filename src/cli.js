#!/usr/bin/env node
const { createElement } = require("react");
const meow = require("meow");
const importJsx = require("import-jsx");
const { render } = require("ink");

const ui = importJsx("./ui");

meow(`
  Usage
    $ iamnapo
`);

(async () => {
	const app = render(createElement(ui));

	await app.waitUntilExit();
})();

