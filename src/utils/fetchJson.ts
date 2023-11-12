import SuperJSON from "superjson";

const fetchJson: <T>(...args: Parameters<typeof fetch>) => Promise<T> = async (...args) => {
    const response = await fetch(...args);

    if (!response.ok) {
        return Promise.reject(response);
    }

    const contentType = response.headers.get('content-type');

    if (contentType && contentType.includes('application/json')) {
        return await SuperJSON.parse(await response.text());
    }

    throw new Error('Response is not JSON')
}

const sendJson: <T>(...args: Parameters<typeof fetch>) => Promise<T> = async (input, init) => {
    const response = await fetch(input, {
        ...init,
        headers: {
            ...init?.headers,
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        return Promise.reject(response);
    }

    const contentType = response.headers.get('content-type');

    if (contentType && contentType.includes('application/json')) {
        return await SuperJSON.parse(await response.text());
    }

    throw new Error('Response is not JSON')
}

export {
    fetchJson,
    sendJson,
};
