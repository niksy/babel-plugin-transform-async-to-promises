async function(iter) {
	let result = 0;
	for (const value of iter) {
		result += value;
	}
	return result;
}
