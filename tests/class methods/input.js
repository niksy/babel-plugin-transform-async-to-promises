function() {
    return class {
        async foo(baz) {
            return await baz();
        }
        static async bar(baz) {
            return await baz();
        }
    };
}
