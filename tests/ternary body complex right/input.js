async function(a, b, c, d) {
	const result = a() ? await b() : c() && await d();
	return result || result;
}
