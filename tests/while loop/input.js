async function(foo) {
	let shouldContinue = true;
	while (shouldContinue) {
		shouldContinue = await foo();
	}
}
