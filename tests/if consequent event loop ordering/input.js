async function(delay, callback) {
	if (delay)
		await 0;
	return callback();
}
