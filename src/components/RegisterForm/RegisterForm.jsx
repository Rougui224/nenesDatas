import React, { useState } from "react";
import { RegisterInput } from "./RegisterInput";
import { formRegister } from "../../js/RegisterForm/registerForm";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    birth_date: "",
    language: "",
    phone: "",
    country: "",
    city: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données envoyées :", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      {formRegister.map((input) => (
        <div key={input.id} className="input-group">
          <RegisterInput
            id={input.id}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            value={formData[input.name]}
            handleChange={handleChange}
          />
          <i className={input.icon}></i>
        </div>
      ))}
      <button type="submit" className="register-button btn-primary">
        Inscription
      </button>
    </form>
  );
};

export default RegisterForm;
