async function(left, right) {
	return left() + await right();
}
