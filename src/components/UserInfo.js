import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

function UserInfo({ logIn, email, onLogOut, onRegist }) {
    return (
        <div className="header__info">
            <p className="header__email">{email}</p>
            <Routes>
              
                    <Route
                    path="sign-up"
                    element={
                        <Link
                        to="sign-up"
                        className={`header__link ${logIn && "header__link_active"}`}
                        onClick={onRegist}
                    >
                        Регистрация
                    </Link>
                    }
                    />

                    <Route
                    path="sign-in"
                    element={
                        <Link
                        to="sign-in"
                        className={`header__link ${logIn && "header__link_active"}`}
                        onClick={onLogOut}
                    >
                        Выйти
                    </Link>  
                    }
                    />
               
            </Routes>



        </div>
    );
}

export default UserInfo;
