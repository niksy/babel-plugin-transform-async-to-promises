async function(foo) {
	i = await foo();
	for (var i in {}) {
	}
	return i;
}
