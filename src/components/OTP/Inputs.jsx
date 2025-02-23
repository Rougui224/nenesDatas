import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

export const OTPInput = ({ length = 6, onSubmit }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (index, e) => {
    const value = e.target.value.replace(/\D/, ""); // Accepter seulement les chiffres
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(0, 1);
    setOtp(newOtp);

    // Déplacer le focus vers l'input suivant si possible
    if (index < length - 1 && value) {
      inputRefs.current[index + 1].focus();
    }

    // Soumettre automatiquement si toutes les cases sont remplies
    if (newOtp.every((digit) => digit !== "")) {
      onSubmit(newOtp.join(""));
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="otp-container">
      <p>Entrez votre code OTP ici</p>
      <div className="otp-inputs">
        {otp.map((_, index) => (
          <input
            key={index}
            type="text"
            inputMode="numeric"
            maxLength="1"
            value={otp[index]}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            ref={(el) => (inputRefs.current[index] = el)}
          />
        ))}
      </div>
      <Link
        to={"/reset-password"}
        className="btn-primary"
        onClick={() => onSubmit(otp.join(""))}
      >
        Envoyez
      </Link>
      <p className="resend-text">
        Je n’ai pas reçu de code ?{" "}
        <span className="resend-link">Le renvoyer</span>
      </p>
    </div>
  );
};
