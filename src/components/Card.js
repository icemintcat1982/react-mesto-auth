import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    const cardDeleteButtonClassName = `element__delete ${
        isOwn && "element__delete_state_hidden"
    }`;
    const cardLikeButtonClassName = `element__button ${
        isLiked && "element__button_active"
    }`;

    function handleCardClick() {
        onCardClick(card);
    }

    function handleCardLike() {
        onCardLike(card);
    }

    function handleDeleteClick() {
        onCardDelete(card);
    }

    return (
        <li className="element__card">
            <button
                className={cardDeleteButtonClassName}
                type="button"
                title="delete"
                onClick={handleDeleteClick}
            ></button>
            <img
                className="element__image"
                src={card.link}
                alt={card.name}
                onClick={handleCardClick}
            />
            <div className="element__title">
                <h2 className="element__text">{card.name}</h2>
                <div className="element__like-section">
                    <button
                        className={cardLikeButtonClassName}
                        type="button"
                        title="like"
                        onClick={handleCardLike}
                    ></button>
                    <span className="element__like-counter">
                        {card.likes.length}
                    </span>
                </div>
            </div>
        </li>
    );
}

export default Card;
