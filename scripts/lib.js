const { readdir, readFile, writeFile, mkdir } = require("node:fs/promises");
const { join } = require("node:path");

const ROOT = join(__dirname, "..");
const DATA_DIR = join(ROOT, "data");

const EXT_BY_LANG = {
  agda: "agda",
  bf: "bf",
  c: "c",
  clojure: "clj",
  cobol: "cob",
  coffeescript: "coffee",
  commonlisp: "lisp",
  cpp: "cpp",
  crystal: "cr",
  csharp: "cs",
  d: "d",
  dart: "dart",
  elixir: "ex",
  elm: "elm",
  erlang: "erl",
  factor: "factor",
  forth: "fth",
  fortran: "f90",
  fsharp: "fs",
  go: "go",
  groovy: "groovy",
  haskell: "hs",
  haxe: "hx",
  idris: "idr",
  java: "java",
  javascript: "js",
  julia: "jl",
  kotlin: "kt",
  lua: "lua",
  nasm: "asm",
  nim: "nim",
  objc: "m",
  ocaml: "ml",
  pascal: "pas",
  perl: "pl",
  php: "php",
  powershell: "ps1",
  prolog: "pro",
  purescript: "purs",
  python: "py",
  r: "r",
  racket: "rkt",
  raku: "raku",
  reason: "re",
  ruby: "rb",
  rust: "rs",
  scala: "scala",
  shell: "sh",
  solidity: "sol",
  sql: "sql",
  swift: "swift",
  typescript: "ts",
  vb: "vb",
};

const LANG_BY_EXT = Object.fromEntries(
  Object.entries(EXT_BY_LANG).map(([lang, ext]) => [ext, lang])
);

const SOLUTION_RE = /^(\d+)-solution\.([a-z0-9]+)$/i;

const kyuDir = (rank) => `${rank}-kyu`;
const kataDir = (kata) => join(ROOT, kyuDir(kata.rank), kata.slug);

async function fetchKata(id) {
  const res = await fetch(`https://www.codewars.com/api/v1/code-challenges/${id}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch kata ${id}: ${res.status} ${res.statusText}`);
  }
  const k = await res.json();
  return {
    id: k.id,
    name: k.name,
    slug: k.slug,
    rank: Math.abs(k.rank.id),
    kyu: k.rank.name,
    url: k.url,
    category: k.category,
    tags: k.tags,
    languages: k.languages,
    description: k.description,
  };
}

async function writeData(kata) {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(
    join(DATA_DIR, `${kata.slug}.json`),
    JSON.stringify(kata, null, 2) + "\n"
  );
}

async function loadKatas() {
  let files;
  try {
    files = await readdir(DATA_DIR);
  } catch {
    return [];
  }
  const katas = [];
  for (const file of files) {
    if (!file.endsWith(".json") || file === "katas.json") continue;
    katas.push(JSON.parse(await readFile(join(DATA_DIR, file), "utf8")));
  }
  return katas;
}

async function scanSolutions(dir) {
  let entries;
  try {
    entries = await readdir(dir);
  } catch {
    return new Map();
  }
  const solved = new Map();
  for (const name of entries.sort()) {
    const m = SOLUTION_RE.exec(name);
    if (!m) continue;
    const lang = LANG_BY_EXT[m[2].toLowerCase()];
    if (lang && !solved.has(lang)) solved.set(lang, `./${name}`);
  }
  return solved;
}

function renderKataReadme(kata, solved) {
  const solutions = kata.languages
    .map((lang) =>
      solved.has(lang)
        ? `- [x] [${lang}](${solved.get(lang)})`
        : `- [ ] [${lang}]()`
    )
    .join("\n");

  return `## ${kata.name}

> url: <${kata.url}>

### Description:

${kata.description.trim()}

### Solutions:

${solutions}
`;
}

function renderKyuIndex(rank, katas) {
  const items = [...katas]
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((k) => `- [${k.name}](./${k.slug}/README.md)`)
    .join("\n");

  return `# Code Katas

## ${rank} kyu:

${items}
`;
}

async function generate() {
  const katas = await loadKatas();
  const byRank = new Map();
  const manifest = [];

  for (const kata of katas) {
    const dir = kataDir(kata);
    await mkdir(dir, { recursive: true });
    const solved = await scanSolutions(dir);
    await writeFile(join(dir, "README.md"), renderKataReadme(kata, solved));
    if (!byRank.has(kata.rank)) byRank.set(kata.rank, []);
    byRank.get(kata.rank).push(kata);

    const solutions = [...solved.entries()].map(([lang, rel]) => ({
      lang,
      path: `${kyuDir(kata.rank)}/${kata.slug}/${rel.replace(/^\.\//, "")}`,
    }));
    manifest.push({ ...kata, solutions });
  }

  manifest.sort((a, b) => b.rank - a.rank || a.name.localeCompare(b.name));
  await writeFile(
    join(DATA_DIR, "katas.json"),
    JSON.stringify(manifest, null, 2) + "\n"
  );

  for (const [rank, group] of byRank) {
    await writeFile(join(ROOT, kyuDir(rank), "README.md"), renderKyuIndex(rank, group));
  }

  return { katas: katas.length, kyus: byRank.size };
}

module.exports = {
  ROOT,
  DATA_DIR,
  EXT_BY_LANG,
  LANG_BY_EXT,
  SOLUTION_RE,
  kataDir,
  fetchKata,
  writeData,
  loadKatas,
  scanSolutions,
  generate,
};
