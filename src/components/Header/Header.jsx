import { Link } from "react-router-dom";
import "./Header.css";
import "./reponsive-Header.css";
import Logo from "../../../public/img/LOGO-kasa-header.svg";

const Header = () => {
  return (
    <nav>
      <Link to="/">
        <img src={Logo} alt="" className="logo" />
      </Link>
      <div className="nav__container-right">
        <Link to="/" className="Link">
          Accueil
        </Link>
        <Link to="/about" className="Link">
          A propos
        </Link>
      </div>
    </nav>
  );
};

export default Header;
