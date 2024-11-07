import { Link } from "react-router-dom";
import "./Header.css";
import "./reponsive-Header.css";
import Logo from "../../../public/img/LOGO-kasa.svg";

const Header = () => {
  return (
    <nav>
      <img src={Logo} alt="" className="logo" />
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
