export const BASE_URL = "https://auth.nomoreparties.co/";
// function handleResponse(res) {
//     if(res.ok) {
//         return res.json()
//     }
//     return Promise.reject(`Ошибка: ${res.status}`)
// }

export const register = (password, email) => {
    return fetch(`${BASE_URL}signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ password, email }),
    })
        .then((response) => {
            try {
                if (response.status === 200) {
                    return response.json();
                }
            } catch (e) {
                return e;
            }
        })
        .then((res) => {
            return res;
        })
        .catch((err) => console.log(err));
};

export const authorization = (password, email) => {
    return fetch(`${BASE_URL}signin`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ password, email }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.jwt) {
                localStorage.setItem("jwt", data.jwt);
                return data;
            }
        })
        .catch((err) => console.log(err));
};

export const getContent = (token) => {
    return fetch(`${BASE_URL}users/me`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    }).then((response) => response.json());
};
