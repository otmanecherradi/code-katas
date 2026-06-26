import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";
import { codeToHtml } from "shiki";

// Repo root: Astro runs with cwd = site/, so the repo is one level up.
const ROOT = path.resolve(process.cwd(), "..");

type ManifestKata = {
  id: string;
  name: string;
  slug: string;
  rank: number;
  kyu: string;
  url: string;
  category: string;
  tags: string[];
  languages: string[];
  description: string;
  solutions: { lang: string; path: string }[];
};

export type Solution = { lang: string; path: string; code: string; html: string };
export type Kata = Omit<ManifestKata, "solutions"> & {
  descriptionHtml: string;
  solutions: Solution[];
};

const SHIKI_LANG: Record<string, string> = {
  objc: "objective-c",
  nasm: "asm",
  commonlisp: "lisp",
  coffeescript: "coffee",
};

const cleanDescription = (md: string) =>
  md
    .replace(/```if(?:-not)?:[^\n]*/g, "```")
    .replace(/^\s*#\s+.*\r?\n/, "");

function loadManifest(): ManifestKata[] {
  const file = path.join(ROOT, "data", "katas.json");
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

async function highlight(code: string, lang: string): Promise<string> {
  const id = SHIKI_LANG[lang] ?? lang;
  try {
    return await codeToHtml(code, { lang: id, theme: "github-dark" });
  } catch {
    return await codeToHtml(code, { lang: "text", theme: "github-dark" });
  }
}

export async function getKatas(): Promise<Kata[]> {
  const manifest = loadManifest();
  return Promise.all(
    manifest.map(async (k) => {
      const descriptionHtml = await marked.parse(cleanDescription(k.description));
      const solutions = await Promise.all(
        k.solutions.map(async (s) => {
          const code = fs.readFileSync(path.join(ROOT, s.path), "utf8").replace(/\s+$/, "");
          return { ...s, code, html: await highlight(code, s.lang) };
        })
      );
      return { ...k, descriptionHtml, solutions };
    })
  );
}
