async function(foo) {
	loop: for (;;) {
		await foo();
		break loop;
	}
}
