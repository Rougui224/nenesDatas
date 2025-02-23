import { Banner } from "../components/Banner/Banner";
import { Footer } from "../components/Footer/Footer";
import LoginForm from "../components/LoginForm/LoginForm";
import logo from "./../assets/img/LOGO.webp";
export function Home() {
  return (
    <>
      <div className="gradient"></div>
      <Banner>
        <img src={logo} alt="Nene - logo transparent" className="Banner_img" />
        <h1 className="Banner_title">Bienvenue sur WAKILIH</h1>

        <p className="Banner_description">
          Valorisons nos langues à travers la donnée !.
        </p>
      </Banner>
      <LoginForm />
      <Footer>
        <p>Éliminons toute barrière linguistique</p>
      </Footer>
    </>
  );
}
