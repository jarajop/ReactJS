import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../assets/styles/style.css";

function Form() {
  const [Pers, setPers] = useState({
    nom: "",
    prenom: "",
    age: "",
    civilite: "",
  }); // ici a début kom rien est encore saisi le usestate est initialié á vide avc ls doubles quotes
  return (
    <div className=" aide d-flex ">
      <form>
        <label className=""> Nom </label>{" "}
        <input
          placeholder="Nom"
          type="text"
          value={Pers.nom}
          name="nom"
          onChange={(e) => setPers({ ...Pers, nom: e.target.value })} // e.target.value renvoyer la valeur actuelle du champ de saisie donc setName.  e.target.value
        />
        <br />
        <label> Prénom </label>{" "}
        <input
          type="text"
          name="prenom"
          placeholder="Prénom"
          value={Pers.prenom}
          onChange={(e) => setPers({ ...Pers, prenom: e.target.value })}
        />
        <br />
        <label> Age </label>{" "}
        <input
          type="number"
          placeholder="Age"
          name="age"
          value={Pers.age}
          onChange={(e) => setPers({ ...Pers, age: e.target.value })}
        />
        <br />
        <label> Civilité </label>{" "}
        <input
          type="text"
          placeholder="Civilité"
          name="civilite"
          value={Pers.civilite}
          onChange={(e) => setPers({ ...Pers, civilite: e.target.value })}
        />
        <br />
        <button className="bg-warning boutton3" type="submit">
          Soumettre
        </button>
      </form>
    </div>
  );
}
export default Form;
//  donc lá Kaba a expliqué 1 truc du genre pr pouvoir controller le fonctionnement des formulaires on le fait avc les usestate cad pr pouvoir controller la valeurs des
// champs du formulaire qui changent on met des ecouteurs  d'evenement tel que le Onchange maintnant le Event on le prefixe par e et kom la val actulle de setId ki change
