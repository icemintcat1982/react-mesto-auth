import React, { useState } from "react";
import AuthPage from "./AuthPage";

function Register({ onRegist }) {
    const [formValue, setFormValue] = useState({
        email: "",
        password: "",
    });

    const handleChange = (evt) => {
        const input = evt.target;
        setFormValue({
            ...formValue,
            [input.name]: input.value,
        });
    };
    const handleSumbit = (evt) => {
        evt.preventDefault();
        onRegist(formValue.email, formValue.password);
    };

    return (
        <div className="register">
            <AuthPage
                nameForm="register"
                onSubmit={handleSumbit}
                title="Регистрация"
                buttonText="Зарегистрироваться"
            >
                <input
                    className="popup__input popup__input_auth"
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Email"
                    minLength="6"
                    maxLength="40"
                    required
                    value={formValue.email}
                    onChange={handleChange}
                />

                <input
                    className="popup__input popup__input_auth"
                    name="password"
                    type="password"
                    id="password"
                    placeholder="Пароль"
                    minLength="6"
                    maxLength="40"
                    required
                    value={formValue.password}
                    onChange={handleChange}
                />
            </AuthPage>
        </div>
    );
}

export default Register;
