# Scripts

Tooling for this repo. `data/` (one JSON config per kata, fetched from the
Codewars API) is the source of truth; every kata `README.md` and kyu index is
**generated** from `data/` plus the solution files on disk. Don't hand-edit the
generated READMEs — edit the data or the solution files and regenerate.

Requires Node 18+ (uses the built-in `fetch`). No dependencies.

## Commands

```bash
# Add a new kata: fetch its metadata into data/ and create its folder + README
node scripts/fetch-kata.js <kata-id>

# Add a solution: create the next NN-solution.<ext> file for a language,
# then update the README checklist (write your code into the new file after)
node scripts/add-solution.js <kata-id|slug> <language>

# Rebuild every README and kyu index from data/ + solution files (no network)
node scripts/generate.js
```

`<kata-id>` is the id in a kata URL, e.g. `https://www.codewars.com/kata/<id>`.
`<language>` uses Codewars names (`javascript`, `python`, `csharp`, `cpp`, ...);
see `EXT_BY_LANG` in `lib.js` for the language↔extension mapping.

## How it works

- A kata is "solved" in a language when a `NN-solution.<ext>` file for that
  extension exists in its folder — that's what checks the box and links the file.
- Kata READMEs list every language the kata supports (from the API), in API order.
- Kyu index READMEs list that tier's katas sorted by name.
- The root `README.md` is **not** generated (keeps the badge/intro); update it by
  hand if you add a new kyu tier.

## Files

- `lib.js` — shared helpers, README templates, language↔extension map.
- `fetch-kata.js`, `add-solution.js`, `generate.js` — the commands above.
- `backfill.js` — one-time migration that seeded `data/` from the existing
  READMEs' kata ids.
