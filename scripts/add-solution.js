#!/usr/bin/env node
const { readdir, writeFile } = require("node:fs/promises");
const { join } = require("node:path");
const { loadKatas, kataDir, generate, EXT_BY_LANG, SOLUTION_RE } = require("./lib");

async function main() {
  const [key, lang] = process.argv.slice(2);
  if (!key || !lang) {
    console.error("Usage: node scripts/add-solution.js <kata-id|slug> <language>");
    process.exit(1);
  }

  const ext = EXT_BY_LANG[lang];
  if (!ext) {
    console.error(`Unknown language "${lang}".`);
    console.error(`Known: ${Object.keys(EXT_BY_LANG).join(", ")}`);
    process.exit(1);
  }

  const kata = (await loadKatas()).find((k) => k.id === key || k.slug === key);
  if (!kata) {
    console.error(`No kata config for "${key}". Run: node scripts/fetch-kata.js <id>`);
    process.exit(1);
  }
  if (!kata.languages.includes(lang)) {
    console.warn(`Warning: "${lang}" is not listed as a supported language for this kata.`);
  }

  const dir = kataDir(kata);
  const existing = await readdir(dir).catch(() => []);

  const numbers = [];
  for (const name of existing) {
    const m = SOLUTION_RE.exec(name);
    if (!m) continue;
    if (m[2].toLowerCase() === ext) {
      console.error(`A ${lang} solution already exists: ${kata.rank}-kyu/${kata.slug}/${name}`);
      process.exit(1);
    }
    numbers.push(parseInt(m[1], 10));
  }

  const next = (numbers.length ? Math.max(...numbers) : 0) + 1;
  const filename = `${String(next).padStart(2, "0")}-solution.${ext}`;
  await writeFile(join(dir, filename), "");
  await generate();
  console.log(`Created ${kata.rank}-kyu/${kata.slug}/${filename} and updated README.`);
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
