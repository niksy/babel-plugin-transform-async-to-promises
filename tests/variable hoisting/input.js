async function(foo) {
	function baz() {
		return bar;
	}
	var bar = await foo();
	return baz();
}
