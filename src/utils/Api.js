class Api {
    constructor(options) {
        this._url = options.url;
        this._headers = options.headers;
    }

    _checkResult(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getUserInfo() {
        return fetch(this._url + "/users/me", {
            method: "GET",
            headers: this._headers,
        }).then(this._checkResult);
    }

    getCards() {
        return fetch(this._url + "/cards", {
            method: "GET",
            headers: this._headers,
        }).then(this._checkResult);
    }

    updateUserInfo({ name, about }) {
        return fetch(this._url + "/users/me", {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                about: about,
            }),
        }).then(this._checkResult);
    }

    addNewCard({ place, link }) {
        return fetch(this._url + "/cards", {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: place,
                link: link,
            }),
        }).then(this._checkResult);
    }

    changeLikeCardStatus(id, isLiked) {
        return fetch(this._url + `/cards/${id}/likes/`, {
            method: `${isLiked ? "PUT" : "DELETE"}`,
            headers: this._headers,
        }).then(this._checkResult);
    }

    deleteCard(id) {
        return fetch(this._url + `/cards/${id}`, {
            method: "DELETE",
            headers: this._headers,
        }).then(this._checkResult);
    }

    changeUserAvatar({ avatar }) {
        return fetch(this._url + `/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatar,
            }),
        }).then(this._checkResult);
    }

    getAllData() {
        return Promise.all([this.getUserInfo(), this.getCards()]);
    }
}

const api = new Api({
    url: "https://mesto.nomoreparties.co/v1/cohort-59",
    headers: {
        authorization: "1f1b2dd2-b429-4573-aa4a-55a60a7ac94d",
        "Content-Type": "application/json",
    },
});

export { api };
