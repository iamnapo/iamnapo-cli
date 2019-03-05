#!/usr/bin/env node
const path = require('path');
const meow = require('meow');
const termImg = require('term-img');
const terminalImage = require('terminal-image');
const importJsx = require('import-jsx');
const { render } = require('ink');

const ui = importJsx('./ui');

meow(`
  Usage
    $ iamnapo
`);

const avatar = path.join(__dirname, 'avatar.png');
termImg(avatar, { fallback: async () => console.log(await terminalImage.file(avatar)) });

render(ui());
