const sendRequest = async (requestConfig) => {
	const response = await fetch(requestConfig.url, {
		method: requestConfig.method || 'GET',
		body: requestConfig.body || null,
		headers: requestConfig.headers || {},
	});

	if (!response.ok) {
		const result = await response.json();
		throw new Error(result.message);
	}

	const result = await response.json();

	return result.data;
};

export default sendRequest;
