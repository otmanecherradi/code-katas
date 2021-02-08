function solution(n) {
  if (n < 0) return 0;
  let s = 0;
  for (let i = 0; i < n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      s += i;
    } else if (i % 5 === 0) {
      s += i;
    } else if (i % 3 === 0) {
      s += i;
    }
  }
  return s;
}

function solution(n) {
  if (n < 0) return 0;
  return Array.from({ length: n }).reduce((s, _, i) => {
    if (i % 5 === 0 && i % 3 === 0) {
      s += i;
    } else if (i % 5 === 0) {
      s += i;
    } else if (i % 3 === 0) {
      s += i;
    }
    return s;
  }, 0);
}

function solution(n) {
  if (n < 0) return 0;
  return Array.from({ length: n }).reduce((s, _, i) => {
    if (i % 5 === 0 || i % 3 === 0) {
      s += i;
    }
    return s;
  }, 0);
}

function solution(n) {
  if (n < 0) return 0;
  return Array.from({ length: n }).reduce(
    (s, _, i) => (i % 5 === 0 || i % 3 === 0 ? (s += i) : s),
    0
  );
}
