async function(foo, bar) {
    var a = foo(),
        b = await bar(),
        c = 3;
    return a + b + c;
}
