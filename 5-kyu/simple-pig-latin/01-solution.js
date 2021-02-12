function pigIt(str) {
  const words = str.split(" ");
  const res = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (/[.!?\\-]/.test(word)) {
      res.push(word);
    } else {
      const c = word.split("");
      const lc = c.splice(1, c.length);
      const w = [...lc, c[0], "ay"];
      res.push(w.join(""));
    }
  }
  return res.join(" ");
}

function pigIt(str) {
  const words = str.split(" ");
  return words
    .reduce((snc, word) => {
      if (/[.!?\\-]/.test(word)) {
        snc.push(word);
      } else {
        const c = word.split("");
        const lc = c.splice(1, c.length);
        const w = [...lc, c[0], "ay"];
        snc.push(w.join(""));
      }
      return snc;
    }, [])
    .join(" ");
}
