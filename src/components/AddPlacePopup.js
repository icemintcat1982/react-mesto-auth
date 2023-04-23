import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
    const [place, setPlace] = React.useState("");
    const [link, setLink] = React.useState("");
    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setPlace("");
        setLink("");
    }, [isOpen]);

    const handlePlaceChange = (evt) => {
        setPlace(evt.target.value);
    };

    const handleLinkChange = (evt) => {
        setLink(evt.target.value);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onAddPlace({
            place: place,
            link: link,
        });
    };

    return (
        <PopupWithForm
            name="card_submit"
            title="Новое место"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            buttonText="Сохранить"
        >
            <fieldset className="popup__fieldset">
                <input
                    id="place-input"
                    className="popup__input popup__input_place"
                    name="name"
                    type="text"
                    placeholder="Название"
                    required
                    minLength="2"
                    maxLength="30"
                    onChange={handlePlaceChange}
                    value={place || ""}
                />
                <span className="popup__input-error" id="place-input-error">
                    Вы пропустили это поле
                </span>
                <input
                    id="link-input"
                    className="popup__input popup__input_link"
                    name="link"
                    type="url"
                    placeholder="Ссылка на картинку"
                    required
                    onChange={handleLinkChange}
                    value={link || ""}
                />
                <span className="popup__input-error" id="link-input-error">
                    Введите адрес сайта
                </span>
            </fieldset>
        </PopupWithForm>
    );
}

export default AddPlacePopup;
