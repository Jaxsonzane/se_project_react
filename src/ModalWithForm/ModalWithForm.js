import './ModalWithForm.css'

function ModalWithForm({ children, buttonText = "Add garment", title, onClose, name }) {

    return (
        <div className={`modal modal__type_${name}`}>
            <div className="modal__content">
                <button type="button" onClick={onClose}> Close </button>
                <h3>{title}</h3>
                <form>
                    {children}
                    <div>
                    <button type="submit">{buttonText}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ModalWithForm;