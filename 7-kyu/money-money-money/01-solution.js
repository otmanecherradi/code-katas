function calculateYears(principal, interest, tax, desired) {
  let years = 0;
  let sum = principal;

  while (sum < desired) {
    years += 1;
    const v = sum * interest;
    sum += v;
    sum -= v * tax;
  }

  return years;
}
