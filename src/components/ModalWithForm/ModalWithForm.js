import './ModalWithForm.css'

function ModalWithForm({ children, buttonText = "Add garment", title, onClose, name }) {

    return (
        <div className={`modal modal__type_${name}`}>
            <div className="modal__content">
                <button className="modal__close_btn" type="button" onClick={onClose}>  </button>
                <h3 className="modal__title">{title}</h3>
                <form className="modal__add_form">
                    {children}
                    <button className="modal__add_btn" type="submit">{buttonText}</button>
                </form>
            </div>
        </div>
    );
}

export default ModalWithForm;