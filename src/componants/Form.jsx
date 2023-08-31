import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../assets/styles/style.css";

function Form() {
  const [Pers, setPers] = useState({
    nom: "",
    prenom: "",
    age: "",
    civilite: "",
  });
  const [empty, setIsempty] = useState(false); // initialisé á false par défaut
  // console.log(Pers.nom)
  // ici a début kom rien est encore saisi le usestate est initialié á vide avc ls doubles quotes
  //Chak champ est lié à l'état correspondant à l'aide de la propriété value et est mis à jour à chaque changement à l'aide de la fonction setPers.

  // Lorsk le user saisit des données dans les champs, les fonctions onChange sont déclenchées, et elles mettent à jour l'état du formulaire
  // en utilisant la fonction setPers et en répandant les valeurs existantes avec les nouvelles valeurs modifiées.

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Pers.prenom === "" || Pers.nom === "") {
      setIsempty(true);
    }
    if (Pers.nom && Pers.prenom) {
      console.log("Prenom", Pers.prenom, "Nom", Pers.nom);
    }
  };
  return (
    <div className=" aide d-flex ">
      <form>
        <label className=""> Nom </label>{" "}
        <input
          placeholder="Nom"
          type="text"
          value={Pers.nom}
          name="nom"
          required
          onChange={(e) => setPers({ ...Pers, nom: e.target.value })} // e.target.value renvoyer la valeur actuelle du champ de saisie donc setName.  e.target.value
        />
        {empty && Pers.nom === "" ? (
          <label> Le nom ne peut pas etre vide</label>
        ) : (
          ""
        )}
        <br />
        <input
          type="email"
          name="prenom"
          placeholder="Prénom"
          required
          value={Pers.prenom}
          onChange={(e) => setPers({ ...Pers, prenom: e.target.value })}
        />
        {empty && Pers.nom === "" ? (
          <label> Le prénom ne peut pas etre vide</label>
        ) : (
          ""
        )}
        <br />
        <label> Age </label>{" "}
        <input
          type="number"
          placeholder="Age"
          name="age"
          required
          value={Pers.age}
          onChange={(e) => setPers({ ...Pers, age: e.target.value })}
        />
        <br />
        <label> Civilité </label>{" "}
        <input
          type="text"
          placeholder="Civilité"
          name="civilite"
          required
          value={Pers.civilite}
          onChange={(e) => setPers({ ...Pers, civilite: e.target.value })}
        />
        <br />
        <button
          className="bg-warning boutton3"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Soumettre
        </button>
      </form>

      <div className=" form2 d-flex justify-content-end">
        <div className="p-2">{Pers.nom}</div>
        <div className="p-2"> {Pers.prenom}</div>
        <div className="p-2"> {Pers.age}</div>
        <div className="p-2"> {Pers.civilite}</div>
      </div>
    </div>
  );
}
export default Form;
//  donc lá Kaba a expliqué 1 truc du genre pr pouvoir controller le fonctionnement des formulaires on le fait avc les usestate cad pr pouvoir controller la valeurs des
// champs du formulaire qui changent on met des ecouteurs  d'evenement tel que le Onchange maintnant le Event on le prefixe par e et kom la val actulle de setId ki change
