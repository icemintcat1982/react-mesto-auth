import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.description);
    }, [currentUser, isOpen]);

    const handleNameChange = (evt) => {
        setName(evt.target.value);
    };

    const handleDescriptionChange = (evt) => {
        setDescription(evt.target.value);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onUpdateUser({
            name,
            about: description,
        });
    };

    return (
        <PopupWithForm
            name="profile_submit"
            title="Редактировать профиль"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            buttonText="Создать"
        >
            <fieldset className="popup__fieldset">
                <input
                    id="name-input"
                    className="popup__input popup__input_name"
                    name="name"
                    type="text"
                    required
                    minLength="2"
                    maxLength="40"
                    value={name || ""}
                    onChange={handleNameChange}
                />
                <span className="popup__input-error" id="name-input-error">
                    Вы пропустили это поле
                </span>
                <input
                    id="decription-input"
                    className="popup__input popup__input_description"
                    name="description"
                    type="text"
                    required
                    minLength="2"
                    maxLength="200"
                    value={description || ""}
                    onChange={handleDescriptionChange}
                />
                <span
                    className="popup__input-error"
                    id="decription-input-error"
                >
                    Вы пропустили это поле
                </span>
            </fieldset>
        </PopupWithForm>
    );
}

export default EditProfilePopup;
