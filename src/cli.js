#!/usr/bin/env node
// Const path = require('path');
const meow = require('meow');
// Const termImg = require('term-img');
// Const terminalImage = require('terminal-image');
const importJsx = require('import-jsx');
const {h, render} = require('ink');

const ui = importJsx('./ui');

meow(`
	Usage
	  $ iamnapo
`);

// Const fallback = async () => {
// 	const image = await terminalImage.file(path.join(__dirname, 'avatar-fallback.png'));
// 	console.log(image);
// };
// termImg(path.join(__dirname, 'avatar.png'), {fallback});

render(h(ui));
