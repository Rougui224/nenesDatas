import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Signup } from "../pages/Signup";
import { ForgotPassword } from "../pages/ForgotPassword";
import { ResetPassword } from "../pages/ResetPassword";
import { CodeConfirm } from "../pages/CodeConfirm";

export const App = () => {
  return (
    <Router basename="/nenesDatas">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inscription" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/check-code" element={<CodeConfirm />} />
        </Routes>
      </div>
    </Router>
  );
};
