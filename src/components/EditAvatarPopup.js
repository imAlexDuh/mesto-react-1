import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup(props) {
    const avatarRef = React.useRef("");

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar({
            avatar: avatarRef.current.value
        });
    }

    return (
        <PopupWithForm
            name="avatar-popup"
            title="Обновить аватар"
            buttonsName="Сохранить"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
        >
            <input ref={avatarRef} name="link" type="url" id="avatar-link" placeholder="Ссылка на картинку"
                className="popup__text popup__text-img" required />
            <span className="popup__input-error" id="avatar-link-error">Введите URL.</span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;