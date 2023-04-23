import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
    onEditAvatar,
    onEditProfile,
    onAddPlace,
    onCardClick,
    onCardDelete,
    onCardLike,
    cards,
}) {
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <main className="main">
            <section className="profile">
                <button
                    className="profile__avatar-edit-btn"
                    type="button"
                    onClick={onEditAvatar}
                >
                    <img
                        className="profile__avatar"
                        src={currentUser.avatar}
                        alt="avatar"
                    />
                </button>

                <div className="profile__info">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <button
                        className="profile__button profile__button_type_edit"
                        type="button"
                        title="edit profile"
                        onClick={onEditProfile}
                    ></button>
                    <p className="profile__description">{currentUser.about}</p>
                </div>

                <button
                    className="profile__button profile__button_type_add"
                    type="button"
                    title="add photo"
                    onClick={onAddPlace}
                ></button>
            </section>
            <section className="elements">
                {cards.map((card) => {
                    return (
                        <Card
                            key={card._id}
                            card={card}
                            onCardClick={onCardClick}
                            onCardDelete={onCardDelete}
                            onCardLike={onCardLike}
                        />
                    );
                })}
            </section>
        </main>
    );
}

export default Main;
