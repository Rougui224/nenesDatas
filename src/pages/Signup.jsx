import { Link } from "react-router-dom";
import { Banner } from "../components/Banner/Banner";
import logo from "./../assets/img/LOGO.webp";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import { Footer } from "../components/Footer/Footer";
export function Signup() {
  return (
    <>
      <Banner classe={"inscription"}>
        <Link className="Banner_link" to={"/"}>
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
        <img className="Banner_img" src={logo} alt="Nene - Logo transparent" />
        <h2 className="Banner_title inscription">WAKILIH</h2>
      </Banner>
      <RegisterForm />
      <Footer>
        <p>Éliminons toute barrière linguistique</p>
      </Footer>
    </>
  );
}
