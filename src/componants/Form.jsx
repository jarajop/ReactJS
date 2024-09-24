import { useState } from "react";
import "../assets/styles/style.css";
import axios from "axios"

function Form() {
  const [Pers, setPers] = useState({
    nom: "",
    prenom: "",
    age: 0,
    genre: "",
    pays:"",
  });
  const [empty, setIsempty] = useState(false); // c l state ki gere un champ vide
   



  // ici a début kom rien est encore saisi le usestate est initialié á vide avc ls doubles quotes
  //Chak champ est lié à l'état correspondant à l'aide de la propriété value et est mis à jour à chaque changement à l'aide de la fonction setPers.

  // Lorsk le user saisit des données dans les champs, les fonctions onChange sont déclenchées, et elles mettent à jour l'état du formulaire
  // en utilisant la fonction setPers et en répandant les valeurs existantes avec les nouvelles valeurs modifiées.

  

  const handleSubmit = (e) => {
    e.preventDefault();  //methode utilise pr annuler le comportement par defaut
    if (Pers.prenom === "" || Pers.nom === "") {
      setIsempty(true);
    }
    if (Pers.nom && Pers.prenom) {
      console.log("Prenom", Pers.prenom, "Nom", Pers.nom ,"Age", Pers.age, "Nationalite", Pers.nationalite,"Genre", Pers.genre);
    }
    
    // axios
    //   .post("https://api-dev.mysubito.net/api/v1/parking/car/rental/all",Pers)
    //   .then(response => {
    //     console.log(response)
    //     // Handle response
    //   })<
  };

  return (
    <div className=" aide d-flex ">
      <form action="" id="login" method="post" onSubmit={handleSubmit}>
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
          onChange={(e) => setPers({ ...Pers, prenom: e.target.value })} // le e.target represente lelement sur lequel levenement est declenche
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

        <div className="d-flex justify-content-start align items-start">
        <label className="pb-4 pt-1 p2-5"> Genre :</label>  
        <div className="pt-3">
        <label > Homme </label>{" "}
        <input
          type="radio"
          placeholder="genre"
          name="genre"
          required
          value="homme"
          onChange={(e) => setPers({ ...Pers, genre: e.target.value })}
        />
        </div>
        <div className="pt-3">
        <label> Femme </label>{" "}
        <input
          type="radio"
          placeholder="genre"
          name="genre"
          required
          value="femme"
          onChange={(e) => setPers({ ...Pers, genre: e.target.value })}
        />
        </div>
        </div>
   
        <label> Nationalite :</label>{" "}
        <select name="nationalite"  type="select" placeholder="nationalite" 
          required value={Pers.nationalite} onChange={(e) => setPers({ ...Pers, nationalite: e.target.value })}>
            <option value="senegal"> Senegal</option>
            <option value="guinee"> Guinee</option>
            <option value="mali">Mali</option>
            <option value="mauritanie">Mauritanie</option>


          
          </select>
        {/* <input type="radio" id="age1" name="age" value="30">
  <label for="age1">0 - 30</label><br> */}
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
        <div className="p-2"> {Pers.genre}</div>
      </div>
    </div>
  );
}
export default Form;
//  donc lá Kaba a expliqué 1 truc du genre pr pouvoir controller le fonctionnement des formulaires on le fait avc les usestate cad pr pouvoir controller la valeurs des
// champs du formulaire qui changent on met des ecouteurs  d'evenement tel que le Onchange maintnant le Event on le prefixe par e et kom la val actulle de setId ki change
