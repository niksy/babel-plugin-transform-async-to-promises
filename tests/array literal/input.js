async function(left, right) {
	return [undefined | 0, left(), [true, "", {
		foo: 1
	}] && 2, await right(), 4];
}
