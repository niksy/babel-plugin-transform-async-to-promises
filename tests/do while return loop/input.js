async function(foo) {
    let shouldContinue;
    do {
        if (!await foo()) return true;
    } while (true);
}
