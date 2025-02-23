import { Link } from "react-router-dom";
import { Banner } from "../components/Banner/Banner";
import { Footer } from "../components/Footer/Footer";
import { PasswordForm } from "../components/ResetPassword/FormPasswords";
import logo from "./../assets/img/LOGO.webp";
export function ResetPassword() {
  return (
    <>
      <div className="gradient"></div>

      <Banner classe={""}>
        <Link className="Banner_link" to={"/forgot-password"}>
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
        <img src={logo} alt="Nene - logo transparent" className="Banner_img" />
        <h1 className="Banner_title">WAKILIH</h1>

        <p className="Banner_description">
          Valorisons nos langues à travers la donnée !.
        </p>
      </Banner>
      <PasswordForm />
      <Footer>
        <p>Éliminons toute barrière linguistique</p>
      </Footer>
    </>
  );
}
