#!/usr/bin/env node

import Pastel from "pastel";

const app = new Pastel({ importMeta: import.meta, name: "iamnapo" });

await app.run();
