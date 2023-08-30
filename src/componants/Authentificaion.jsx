import { NavLink } from "react-router-dom";
import "../assets/styles/connexion.css";
import Img11 from "../assets/images/home/2776 1.png";

function Authentification() {
  return (
    <div className="container-lg connexion">
      <div className="row">
        <div className="col-6 photo"></div>
        <div className="col-6 ">
          <p className="text">Connexion </p>
          <p className=" bg-info w-75 pe-1">Entrez vos identifiants de connexions svp. </p>
          <hr className="trait" />
          <input
            className="user"
            placeholder="Entrez ID or E-mail"
            type="email"
            id="email"
            required
          />{" "}
          <br />
          <input
            className="user mt-5"
            placeholder="Entrez Mot de passe"
            type="email"
            id="email"
            required
          />{" "}
          <br />
          <div className="check d-flex justify-content-between pt-5 ">  {/* mettre 2 choses de part et d'autre on le fait avc jus-cont-between */}
            {" "}
            
            <span className="px-5"><input type="checkbox" /> Restez connecter </span>
            <span className="px-5">Mot de passe oublier ?</span> 
          </div>
          <input className="soumettre" type="" required />
          

        </div>
      </div>
    </div>
  );
}
export default Authentification;
