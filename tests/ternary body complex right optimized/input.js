async function(a, b, c, d) {
	return a() ? await b() : c() && await d();
}
