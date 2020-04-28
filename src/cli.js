#!/usr/bin/env node
const React = require("react");
const meow = require("meow");
const importJsx = require("import-jsx");
const { render } = require("ink");

const ui = importJsx("./ui");

meow(`
  Usage
    $ iamnapo
`);

render(React.createElement(ui));
