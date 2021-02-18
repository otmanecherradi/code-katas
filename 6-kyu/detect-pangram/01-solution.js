function isPangram(string) {
	return (
		string.split('').reduce((s, c) => {
			if (c.match(/[a-z]/i)) {
				s.add(c.toUpperCase());
			}
			return s;
		}, new Set()).size === 26
	);
}
