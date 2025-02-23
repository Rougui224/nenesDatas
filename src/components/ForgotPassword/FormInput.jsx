import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../LoginForm/Input";

export const FormInput = () => {
  const [formData, setFormData] = useState({ phone: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données envoyées :", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form form-forgot-password">
      <h2>Entrez votre numéro de téléphone</h2>
      <div className="input-group">
        <Input
          id={"phoneNumber"}
          name={"phone"}
          type={"tel"}
          placeholder={"EX: 00224 6** ** ** **"}
          value={formData["phone"]}
          handleChange={handleChange}
        />
        <i className="fas fa-phone-alt"></i>
      </div>
      <Link to={"/check-code"} className="btn-primary">
        Envoyez
      </Link>
    </form>
  );
};
