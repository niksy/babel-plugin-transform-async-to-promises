async function(foo) {
	labeled: {
		if (await foo()) {
			break labeled;
		}
		return false;
	}
	return true;
}
