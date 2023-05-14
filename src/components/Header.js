import Logo from '../images/header_img1.png';
import React from 'react';
import UserInfo from './UserInfo';

function Header({ logIn, onLogOut, userMail, isOpen, onClose }) {

return(
    <header className="header">
                    <img
                className="logo logo_place_header"
                src={Logo}
                alt="Место"
            />
            <UserInfo
            logIn={logIn}
            onLogOut={onLogOut}
            userMail={userMail}
            isOpen={isOpen}
            onClose={onClose} />
    </header>
)
}

export default Header;

