function fibonacci(n) {
	const res = [];

	let cn = 0,
		an = 1,
		nextTerm;

	for (let i = 1; i <= n; i += 1) {
		res.push(cn);
		nextTerm = cn + an;
		cn = an;
		an = nextTerm;
	}

	return res;
}
