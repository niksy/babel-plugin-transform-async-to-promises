async function(foo) {
    var a = 1,
        b = await foo(),
        c = 3;
    return a + b + c;
}
