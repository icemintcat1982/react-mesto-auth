import { Link } from "react-router-dom";

function UserInfo({ logIn, userEmail, onLogOut, menuText }) {
    return (
        <div className="header__info">
            <p className="header__email">{userEmail}</p>

            <Link
                to="/"
                className={`header__link ${logIn && "header__link_active"}`}
                onClick={onLogOut}
            >
                {menuText}
            </Link>
        </div>
    );
}

export default UserInfo;
