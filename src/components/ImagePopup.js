function ImagePopup({ card, onClose }) {
    console.log(card);
    return (
        <section
            className={`popup popup_photo_open ${
                Object.keys(card).length !== 0 ? "popup_active" : ""
            }`}
        >
            <figure className="popup__open-photo">
                <button
                    className="popup__close popup__close-photo"
                    type="button"
                    title="close"
                    onClick={onClose}
                ></button>
                <img className="popup__photo" src={card.link} alt={card.name} />
                <figcaption className="popup__caption">{card.name}</figcaption>
            </figure>
        </section>
    );
}

export default ImagePopup;
