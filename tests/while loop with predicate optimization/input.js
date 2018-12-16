async function(foo) {
	let shouldContinue = true;

	function shouldContinueAsCall() {
		return shouldContinue;
	}
	while (await shouldContinueAsCall()) {
		shouldContinue = await foo();
	}
}
