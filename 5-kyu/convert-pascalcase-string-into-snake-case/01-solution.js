// 1st
function toUnderscore(string) {
	if (typeof string !== 'string') return string.toString();
	return string
		.match(/[A-Z0-9][a-z0-9]*/g)
		.map((word) => word.toLowerCase())
		.join('_');
}

// 2nd
function toUnderscore(string) {
	if (typeof string !== 'string') return string.toString();
	return string.replace(/[A-Z]/g, (letter) => '_' + letter.toLowerCase()).slice(1);
}

// 3rd
function toUnderscore(string) {
	if (typeof string !== 'string') return string.toString();
	return string
		.replace(/([A-Z])/g, '_$1')
		.toLowerCase()
		.slice(1);
}
