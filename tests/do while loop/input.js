async function(foo) {
    let shouldContinue;
    do {
        shouldContinue = await foo();
    } while (shouldContinue);
}
