async function(foo, bar) {
	return bar.baz(await foo());
}
