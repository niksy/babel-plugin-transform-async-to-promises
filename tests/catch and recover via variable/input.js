async function(value, log) {
    var result;
    try {
        result = await value();
    } catch (e) {
        result = "an error";
    }
    log("result:", result);
    return result;
}
