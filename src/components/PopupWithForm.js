function PopupWithForm({name, title, children, isOpen, onClose, buttonText, onSubmit}) {
    // console.log(isOpen)
    return(
        <section className={`popup popup_${name} ${isOpen ? 'popup_active' : ''}`}>
            <div className="popup__content">
                <button className="popup__close" type="button" onClick={onClose}></button>
                <h2 className="popup__title">{title}</h2>
                <form className="popup__form" name={name} onSubmit={onSubmit}>
                 
                    {children} 
            
                    <button className="popup__submit" type="submit">{buttonText}</button>
                </form>
            </div>
        </section>
    );
}

export default PopupWithForm;