async function(foo, bar, baz) {
	const result = foo() ? await bar() : await baz();
	return result || result;
}
