async function(a, b, c, d) {
	const result = a() ? b() && await c() : await d();
	return result || result;
}
