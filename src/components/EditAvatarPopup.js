import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    const avatarRef = React.useRef(null);

    const handleSubmit = (evt) => {
        evt.preventDefault(evt);
        onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
    };
    
    React.useEffect(() => {
        avatarRef.current.value = ""; 
    }, [isOpen]);


    return (
        <PopupWithForm
            name="avatar_edit"
            title="Обновить аватар"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            buttonText="Сохранить"
        >
            <fieldset className="popup__fieldset">
                <input
                    id="avatar-input"
                    className="popup__input popup__input_avatar"
                    name="avatar"
                    type="url"
                    placeholder="Ссылка на картинку"
                    required
                    ref={avatarRef}
                />
                <span className="popup__input-error" id="avatar-input-error">
                    Введите ссылку на картинку
                </span>
            </fieldset>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;
