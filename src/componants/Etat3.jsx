import { NavLink } from "react-router-dom";
import { useState } from 'react';

function Etat3() { //
  const [user, setUser] = useState({ name: 'FatouDiop', age: 10 });//donc la au lieu davoir des variables on a des objets    

  const handleClick = () => { //cet (f) copie ts les données de l’objet à l’aide de l’opérateur d’étalement (...) et augmente l’âge de l’utilisateur de 1 chakfois que l’on clique sur le bouton augmenter age.
    setUser({ ...user, age: user.age + 1 });
  };

  return (
    <div>
      <p>Nom: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={handleClick}>Augmenter Age</button>
    </div>
  );
}

export default Etat3;