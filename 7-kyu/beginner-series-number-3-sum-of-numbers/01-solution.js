function getSum(a, b) {
	let sum = 0;
	for (let i = Math.min(a, b); i <= Math.max(a, b); i += 1) {
		sum += i;
	}
	return sum;
}
