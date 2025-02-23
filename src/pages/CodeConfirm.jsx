import React from "react";
import OTPPage from "../components/OTP/LayoutOTP";
import { Banner } from "../components/Banner/Banner";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import logo from "./../assets/img/LOGO.webp";
export const CodeConfirm = () => {
  return (
    <>
      <Banner classe={""}>
        <div className="gradient"></div>
        <Link className="Banner_link" to={"/forgot-password"}>
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
        <img src={logo} alt="Nene - logo transparent" className="Banner_img" />
        <h1 className="Banner_title">WAKILIH</h1>
      </Banner>
      <OTPPage />
      <Footer>
        <p>Éliminons toute barrière linguistique</p>
      </Footer>
    </>
  );
};
