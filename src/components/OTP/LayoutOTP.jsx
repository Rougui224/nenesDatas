import React from "react";
import { OTPInput } from "./Inputs";

const OTPPage = () => {
  const handleOTPSubmit = (otp) => {
    console.log("Code OTP soumis :", otp);
    //  ici l'appel API pour valider l'OTP
  };

  return (
    <>
      <OTPInput length={6} onSubmit={handleOTPSubmit} />
    </>
  );
};

export default OTPPage;
