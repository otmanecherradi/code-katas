function reverseWords(str) {
  return str.split(' ').reverse().join(' ');
}

const solution = reverseWords('The greatest victory is that which requires no battle');
console.log(solution);
