function arrayDiff(a, b) {
  const res = [];
  a.forEach((item, i) => {
    if (!b.includes(item)) {
      res.push(item);
    }
  });

  return res;
}

function arrayDiff(a, b) {
  return a.reduce((res, item) => {
    if (!b.includes(item)) {
      res.push(item);
    }
    return res;
  }, []);
}

function arrayDiff(a, b) {
  return a.filter(e => !b.includes(e));
}
