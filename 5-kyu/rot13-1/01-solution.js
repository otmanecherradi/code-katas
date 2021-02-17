// 65 - 90 uppercase letters
// 97 - 122 lowercase letters

function rot13(message) {
	return message.split('').reduce((encoded, letter) => {
		const charCode = letter.charCodeAt(0);
		if (charCode >= 65 && charCode <= 90) {
			let newCharCode = charCode + 13;
			if (newCharCode > 90) {
				newCharCode = 64 + (newCharCode - 90);
			}
			encoded += String.fromCharCode(newCharCode);
		} else if (charCode >= 97 && charCode <= 122) {
			let newCharCode = charCode + 13;
			if (newCharCode > 122) {
				newCharCode = 96 + (newCharCode - 122);
			}
			encoded += String.fromCharCode(newCharCode);
		} else {
			encoded += letter;
		}
		return encoded;
	}, '');
}
