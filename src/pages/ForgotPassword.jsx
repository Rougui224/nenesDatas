import { Link } from "react-router-dom";
import { Banner } from "../components/Banner/Banner";
import { Footer } from "../components/Footer/Footer";
import { FormInput } from "../components/ForgotPassword/FormInput";
import logo from "./../assets/img/LOGO.webp";
export function ForgotPassword() {
  return (
    <>
      {" "}
      <div className="gradient"></div>
      <Banner>
        <Link className="Banner_link" to={"/"}>
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
        <img src={logo} alt="Nene - logo transparent" className="Banner_img" />

        <h1 className="Banner_title">WAKILIH</h1>
      </Banner>
      <FormInput />{" "}
      <Footer>
        <p>Éliminons toute barrière linguistique</p>
      </Footer>
    </>
  );
}
