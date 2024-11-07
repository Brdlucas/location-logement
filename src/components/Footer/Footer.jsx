import LogoFooter from "../../../public/img/LOGO-kasa-footer.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <img src={LogoFooter} alt="" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
