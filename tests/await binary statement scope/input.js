async function(left, right) {
	if (true)
		return left() + await right();
	else
		return false;
}
