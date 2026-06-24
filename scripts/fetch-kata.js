#!/usr/bin/env node
const { fetchKata, writeData, generate } = require("./lib");

async function main() {
  const id = process.argv[2];
  if (!id) {
    console.error("Usage: node scripts/fetch-kata.js <kata-id>");
    process.exit(1);
  }
  const kata = await fetchKata(id);
  await writeData(kata);
  await generate();
  console.log(`Saved data/${kata.slug}.json (${kata.rank} kyu) and regenerated READMEs.`);
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
