import Logo from "../images/header_img1.png";
import React from "react";
import UserInfo from "./UserInfo";
import { Route, Routes } from "react-router-dom";

function Header({ logIn, onLogOut, email, isOpen, onClose, menuText }) {
    return (
        <header className="header">
            <img className="logo logo_place_header" src={Logo} alt="Место" />
            <Routes>
                <Route
                path="/"
                element={
                    <UserInfo
                    logIn={logIn}
                    onLogOut={onLogOut}
                    userMail={email}
                    isOpen={isOpen}
                    onClose={onClose}
                    menuText="Выйти"
                />
                } />

<Route
                path="sign-up"
                element={
                    <UserInfo
                    logIn={logIn}
                    onLogOut={onLogOut}
                    userMail={email}
                    isOpen={isOpen}
                    onClose={onClose}
                    menuText="Регистрация"
                />
                } />

<Route
                path="sign-in"
                element={
                    <UserInfo
                    logIn={logIn}
                    onLogOut={onLogOut}
                    userMail={email}
                    isOpen={isOpen}
                    onClose={onClose}
                    menuText="Войти"
                />
                } />
            </Routes>

        </header>
    );
}

export default Header;
