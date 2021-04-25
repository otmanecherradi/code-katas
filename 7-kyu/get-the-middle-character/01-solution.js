function getMiddle(s) {
	if (s.length == 1) {
		return s;
	}
	const middle = (s.length - 1) / 2;

	if (Number.isInteger(middle)) {
		return s[middle];
	} else {
		return s[Math.floor(middle)] + s[Math.ceil(middle)];
	}
}
