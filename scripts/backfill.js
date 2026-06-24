#!/usr/bin/env node
const { readdir, readFile } = require("node:fs/promises");
const { join } = require("node:path");
const { ROOT, fetchKata, writeData, generate } = require("./lib");

async function main() {
  const kyuDirs = (await readdir(ROOT, { withFileTypes: true }))
    .filter((d) => d.isDirectory() && /^\d+-kyu$/.test(d.name))
    .map((d) => d.name);

  const ids = [];
  for (const kyu of kyuDirs) {
    const subs = await readdir(join(ROOT, kyu), { withFileTypes: true });
    for (const sub of subs) {
      if (!sub.isDirectory()) continue;
      const readme = await readFile(join(ROOT, kyu, sub.name, "README.md"), "utf8").catch(() => "");
      const m = /codewars\.com\/kata\/([a-z0-9]+)/i.exec(readme);
      if (m) ids.push(m[1]);
      else console.warn(`No kata id found in ${kyu}/${sub.name}/README.md — skipped`);
    }
  }

  console.log(`Found ${ids.length} kata(s). Fetching metadata...`);
  for (const id of ids) {
    const kata = await fetchKata(id);
    await writeData(kata);
    console.log(`  ${kata.rank} kyu  ${kata.slug}`);
  }

  const { katas } = await generate();
  console.log(`Wrote ${ids.length} config(s) to data/ and regenerated ${katas} README(s).`);
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
