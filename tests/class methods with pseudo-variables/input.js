function() {
    return class {
        async testThis() {
            return this;
        }
        async testArguments() {
            return arguments[0];
        }
    };
}
