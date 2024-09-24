import { NavLink } from "react-router-dom";
import "../assets/styles/connexion.css";
import Img11 from "../assets/images/home/2776 1.png";

function Authentification() {
  return (
    <div className="container connexion">
      <div className="row">
        <div className="col-6 photo"></div>
        <div className="col-6 ">
          <p className="text">Connexion </p>
          <p className="text22">
            Entrer vos identifiants de connexions svp{" "}
          </p>{" "}
          {/* pour ls vals de width c soit 25,50,75,100 ou auto */}
          <hr className="trait" />
          <form>
            <div>
              <label htmlFor="email" className="d-flex justify-content-start"> Email 
              <input
              className="user"
              placeholder="Entrez ID or E-mail"
              type="email"
              id="email"
              required
            />{" "}
              </label>
            </div>
            <br />
            <input
              className="user mt-5"
              placeholder="Entrez Mot de passe"
              type="email"
              id="email"
              required
            />{" "}
          </form>
          <br />
          <div className="check d-flex justify-content-between pt-5 ">
            {" "}
            {/* mettre 2 choses de part et d'autre on le fait avc jus-cont-between */}{" "}
            <span className="px-5">
              <input type="checkbox" /> Restez connecter{" "}
            </span>
            <span className="px-5">Mot de passe oublier ?</span>
          </div>
          <button className="soumettre" type="submit" id="submit" required>
            Se connecter
          </button>
        </div>
      </div>
    </div>
  );
}
export default Authentification;
