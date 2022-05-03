#!/usr/bin/env node
import meow from "meow";
import { render } from "ink";

import UI from "./ui.js"; // eslint-disable-line import/extensions

meow(`
  Usage
    $ iamnapo
`, { importMeta: import.meta });

const app = render(<UI />);

await app.waitUntilExit();
