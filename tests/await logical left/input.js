async function(left, right) {
	return await left() && right();
}
