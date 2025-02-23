import React, { useState } from "react";
import { InputsPasswords } from "./InputsPassword";
import { passwordInputs } from "../../js/ResetPassword/passwordsInputs";

export const PasswordForm = () => {
  const [formData, setFormData] = useState({
    new_password: "",
    confirm_password: "",
  });
  const [showPassword, setShowPassword] = useState({
    new_password: false,
    confirm_password: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <form className="password-form login-form">
      {passwordInputs.map((input) => (
        <div key={input.id} className="input-group">
          <InputsPasswords
            id={input.id}
            name={input.name}
            type={showPassword[input.name] ? "text" : "password"}
            placeholder={input.placeholder}
            value={formData[input.name]}
            handleChange={handleChange}
          />
          <i
            className={
              showPassword[input.name] ? "fas fa-eye" : "fas fa-eye-slash"
            }
            onClick={() => togglePasswordVisibility(input.name)}
          ></i>
        </div>
      ))}
      <button type="submit" className="password-button btn-primary">
        Confirmer
      </button>
    </form>
  );
};
