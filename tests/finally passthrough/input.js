async function(value, log) {
	try {
		return await value();
	} finally {
		log("finished value(), might rethrow");
	}
}
