import React, { useState } from "react";
import { formInputs } from "../../js/LoginForm/formInputs";
import { Input } from "./Input";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({ phone: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données envoyées :", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      {formInputs.map((input) => (
        <div key={input.id} className="input-group">
          <i className={input.icon}></i>
          <Input
            id={input.id}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            value={formData[input.name]}
            handleChange={handleChange}
          />
        </div>
      ))}
      <Link className="forgot-password link" to={"/forgot-password"}>
        Mot de passe oublié ?
      </Link>
      <button type="submit" className="login-button btn-primary">
        Connexion
      </button>
      <span>
        J'ai pas de compte ,{" "}
        <Link className="link" to={"/inscription"}>
          créer un compte
        </Link>
      </span>
    </form>
  );
};

export default LoginForm;
