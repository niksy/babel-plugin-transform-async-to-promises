async function(delay, callback) {
	return callback(!delay ? 0 : await 0);
}
