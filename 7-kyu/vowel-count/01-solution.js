const vowels = ['a', 'e', 'i', 'o', 'u'];

function getCount(str) {
	return str.split('').reduce((count, char) => {
		if (vowels.includes(char.toLowerCase())) {
			return (count += 1);
		} else {
			return count;
		}
	}, 0);
}
