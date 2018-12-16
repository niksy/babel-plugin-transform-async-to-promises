async function(foo) {
	let shouldContinue = true;

	function shouldContinueAsCall() {
		return shouldContinue;
	}
	while (shouldContinueAsCall()) {
		shouldContinue = await foo();
	}
}
