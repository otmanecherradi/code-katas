function highAndLow(numbers) {
	const ns = numbers.split(' ').map((n) => +n);
	return [Math.max(...ns), Math.min(...ns)].join(' ');
}
