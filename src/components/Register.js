

import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import AuthPage from "./AuthPage";
import * as auth from '../utils/auth';

function Register() {
    const [formValue, setFormValue] = useState({
        email: '', 
        password: '',
        confirmPassword: ''
    })
    const navigate = useNavigate();

    const handleChange = (evt) => {
        const{name, value} = evt.target;
        setFormValue({
            ...formValue,
            [name]: value
        });
    }
    const handleSumbit = (evt) => {
        evt.preventDefault();
        if (formValue.password === formValue.confirmPassword){
            const{ password, email } = formValue;
            auth.register(password, email)
            .then(() => {
                navigate('/', { replace: true })
            })
        }
    }

    return (
        <div className="register">
                <AuthPage
                nameForm="register"
                onSubmit={handleSumbit}
                title="Регистрация"
                buttonText="Зарегистрироваться">
        
                <input className="popup__input popup__input_auth"
                name="Email"
                type="email"
                id="email"
                placeholder="Email"
                minLength="6"
                maxLength="40"
                required
                value={formValue.email}
                onChange={handleChange}/>
        
                <input className="popup__input popup__input_auth"
                    name="Password"
                    type="password"
                    id="password"
                    placeholder="Пароль"
                    minLength="6"
                    maxLength="40"
                    required
                    value={formValue.password}
                    onChange={handleChange} />  
                </AuthPage>
            </div>
    )
}

export default Register