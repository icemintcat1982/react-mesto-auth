import { Link } from "react-router-dom";

function UserInfo({ logIn, email, onLogOut }) {
    return (
        <div className="header__info">
            <p className="header__email">{email}</p>
            <Link
                to="sign-up"
                className={`header__link ${logIn && "header__link_active"}`}
                onClick={onLogOut}
            >
                Выйти
            </Link>
        </div>
    );
}

export default UserInfo;
