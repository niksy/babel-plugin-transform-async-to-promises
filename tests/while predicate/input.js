async function(foo) {
	var count = 0;
	while (await foo()) {
		count++;
	}
	return count
}
