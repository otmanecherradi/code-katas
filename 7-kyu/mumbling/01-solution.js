function accum(s) {
	return s
		.toLowerCase()
		.split('')
		.reduce((acc, char, idx) => {
			acc.push(`${char.toUpperCase()}${char.toLowerCase().repeat(idx)}`);
			return acc;
		}, [])
		.join('-');
}
