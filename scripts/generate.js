#!/usr/bin/env node
const { generate } = require("./lib");

generate()
  .then(({ katas, kyus }) =>
    console.log(`Regenerated ${katas} kata README(s) across ${kyus} kyu(s).`)
  )
  .catch((e) => {
    console.error(e.message);
    process.exit(1);
  });
