import Logo from '../images/header_img1.png'

function Header() {
return(
    <header className="header">
                    <img
                className="logo logo_place_header"
                src={Logo}
                alt="Место"
            />
    </header>
);
}

export default Header;