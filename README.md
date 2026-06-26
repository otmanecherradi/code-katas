# Code Katas

repo with all my solved katas from <https://www.codewars.com>, hopefully one every day.

**Browse them at <https://otmanecherradi.github.io/code-katas/>**

![Codewarrior Profile Badge](https://www.codewars.com/users/otmanecherradi/badges/large)

### 8 kyu:

[See Here](./8-kyu/README.md)

### 7 kyu:

[See Here](./7-kyu/README.md)

### 6 kyu:

[See Here](./6-kyu/README.md)

### 5 kyu:

[See Here](./5-kyu/README.md)

## How it works

Each kata's metadata lives in `data/<slug>.json` (fetched from the Codewars API) and is the source of truth — every kata `README.md` and kyu index is **generated** from it plus the solution files on disk. The site under [`site/`](./site) is built from the same data and deployed to GitHub Pages.

```bash
node scripts/fetch-kata.js <kata-id>          # add a new kata (folder + README)
node scripts/add-solution.js <slug> <lang>    # add a solution file + tick the README
node scripts/generate.js                      # rebuild all READMEs + data/katas.json
```

See [`scripts/README.md`](./scripts/README.md) for the full toolkit.
