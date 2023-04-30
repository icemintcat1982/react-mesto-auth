import Logo from '../images/header_img1.png';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserInfo from './UserInfo';

function Header({ logIn }) {

return(
    <header className="header">
                    <img
                className="logo logo_place_header"
                src={Logo}
                alt="Место"
            />

   <Routes>
    {logIn && <Route path='/'
    element ={<UserInfo/>}/>}
    <Route path='/sign-up'></Route>
    <Route path='/sign-in'></Route>


   </Routes>
            
    </header>
)
}

export default Header;

