function digital_root(n) {
  const str = `${n}`;
  const nbr = str.split("").map(Number).reduce((c, i) => {
    r = c + i;
    while(`${r}`.length > 1) {
      c += digital_root(r);
    } 
      c = r;
    
    return c;
  }, 0);

  return nbr;
}
