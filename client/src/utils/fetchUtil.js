const URL = '/';

const fetchHook = (url, options) => {
    options.headers = {
        ...options.headers,
        "Content-Type": "application/json",
    }
    return fetch(`${URL}${url}`, options)
        .then(response => {
            if (response.status !== 200) {
                return response.json() || {status:'ERROR',message:"Something went wrong"};
            }
            return response.json();
        })
        .catch(error => {
            return error.message || error.statusText || "Something went wrong";
        });
}
const fetchHookWithToken = (url, options) => {
    const TOKEN = localStorage.getItem('token') || null;
    options.headers = {
        'Authorization': `Bearer ${TOKEN}`
    }
    return fetchHook(url, options);
}
const fetchHookWithBody = (url, options, body) => {
    options.body = JSON.stringify(body);
    return fetchHook(url, options);
}
const fetchHookWithTokenAndBody = (url, options, body) => {
    const TOKEN = localStorage.getItem('token') || null;
    options.headers = {
        'Authorization': `Bearer ${TOKEN}`
    }
    options.body = JSON.stringify(body);
    return fetchHook(url, options);
}

export {
    fetchHook,
    fetchHookWithToken,
    fetchHookWithBody,
    fetchHookWithTokenAndBody,
}
