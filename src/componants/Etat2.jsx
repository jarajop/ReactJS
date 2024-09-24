import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Etat2() {  //Dans cet exemple, nous utilisons useState pour gérer un tableau nommé list. L’état initial de list est un tableau contenant trois éléments – apple, banana et orange.
  const [list, setList] = useState(['pomme', 'banane', 'orange']);

  const addToList = () => {  //Nous avons également créé une fonction addToList qui copie tous les éléments du tableau à l’aide de l’opérateur de propagation (...), puis ajoute un nouvel élément, lananas, au tableau list chaque fois que l’on clique sur le bouton « Add item ».
    const newItem = 'ananas';
    setList([...list, newItem]);
  };

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={addToList}>Ajouter Element</button>
    </div>
  );
}

export default Etat2;