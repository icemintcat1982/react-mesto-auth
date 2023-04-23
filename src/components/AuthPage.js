import React from "react";
import { Link } from "react-router-dom";

function AuthPage({ nameForm, onSubmit, title, children, buttonText}) {
return (
<div className="page-auth">
    <form className="page-auth__form" name={nameForm} noValidate onSubmit={onSubmit}>
        <h2 className="page-auth__title">{title}</h2>
        {children}
        <button className="page-auth__button" type="submit">{buttonText}</button>
        {nameForm === 'register' && <Link className="page-auth__link" to='/sign-up'>Уже зарегистрированы? Войти </Link>}

    </form>
</div>

)


}

export default AuthPage