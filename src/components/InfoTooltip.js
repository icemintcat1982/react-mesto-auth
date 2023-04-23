function InfoTooltip ({isOpen, onClose, imgResult, title}) {
    return(
      <section className={`popup ${isOpen ? 'popup_active' : ''}`}>
        <div className="popup__content">
            <img src={imgResult} alt={imgResult} className="popup__tooltip">{title}</img>
            <h2 className="popup__title popup__title_tooltip">{title}</h2>
        <button className="popup__close" type="button" onClick={onClose}></button>
        </div>
      </section>
    )
}

export default InfoTooltip