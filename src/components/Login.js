import React from "react";
import AuthPage from "./AuthPage";

function Login({ onAuth }) {

const [email, setEmail] = React.useState('')
const [password, setPassword] = React.useState('')

function handleChange(evt) { 
    const {value} = evt.target
    evt.target.name === 'Email' ? setEmail(value) : setPassword(value)
}

function handleSumbit(evt) { 
    evt.preventDefault()
    onAuth(password, email)
}

return (
    <div className="login">
        <AuthPage 
        nameForm="login"
        onSubmit={handleSumbit}
        title="Вход"
        buttonText="Войти" >
            <input className="popup__input popup__input_auth"
            name="Email"
            type="email"
            id="email"
            placeholder="Email"
            minLength="6"
            maxLength="40"
            required
            value={email || ''}
            onChange={handleChange} />

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


export default Login