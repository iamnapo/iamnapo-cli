#!/usr/bin/env node
const path = require('path');
const meow = require('meow');
const termImg = require('term-img');
const importJsx = require('import-jsx');
const { render } = require('ink');

const ui = importJsx('./ui');

meow(`
  Usage
    $ iamnapo
`);

termImg(path.join(__dirname, 'avatar.png'), { fallback: () => {} });
render(ui());
