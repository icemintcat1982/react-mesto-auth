import React, {useState} from "react";
import AuthPage from "./AuthPage";

function Register({ onRegister }) {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

function handleChange(evt) {
    const {value} = evt.target
    evt.target.name === 'Email' ? setEmail(value) : setPassword(value)
}

function handleSumbit(evt) { 
    evt.preventDefault()
    onRegister(password, email)
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
        value={email || ''}
        onChange={handleChange}/>

        <input className="popup__input popup__input_auth"
            name="Password"
            type="password"
            id="password"
            placeholder="Пароль"
            minLength="6"
            maxLength="40"
            required
            value={password || ''}
            onChange={handleChange} />  
        </AuthPage>
    </div>
)
}

export default Register