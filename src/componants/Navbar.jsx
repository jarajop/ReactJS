import { NavLink } from "react-router-dom";
import "../assets/logos/subito/logo-texte2-mysubito.png";
import Subito from "../assets/logos/subito/logo-texte2-mysubito.png";

function Navbar() {
  return (
    <div className="container-fluid">
      <nav className="d-flex ">
        {" "}
        {/* donc la le d-flex permet d'aligner ts les elements sur la mem ligne */}
        <img src={Subito} alt="" className="logo" />
        <ul className="nav justify-content-end py-3 align-items-center ms-auto p-2">
          {" "}
          {/*cette classe permet de le mettre tt a fait a droite et py regle ls blem de marges et ms pr dire margin */}
          <li>
            <NavLink className="mem" to="/">
              {" "}
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink className="mem" to="/services">
              {" "}
              Nos Services
            </NavLink>
          </li>
          <li>
            <NavLink className="mem" to="/confiance">
              {" "}
              Ils nous font confiance
            </NavLink>
          </li>
          <li>
            <NavLink className="mem" to="/voitures">
              {" "}
              Nos Voitures{" "}
            </NavLink>
          </li>
          <li>
            <NavLink type="button" to="/connexion" className="boutton">
              Connexion{" "}
            </NavLink>{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
