import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Etat2() {
  const [list, setList] = useState(['pomme', 'banane', 'orange']);

  const addToList = () => {
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