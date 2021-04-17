String.prototype.toJadenCase = function () {
	return this.split(' ')
		.reduce((acc, word) => {
			acc.push(`${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`);
			return acc;
		}, [])
		.join(' ');
};
