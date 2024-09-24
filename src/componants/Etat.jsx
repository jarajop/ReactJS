import { useState } from 'react'; // ne pas oublier de l’importer depuis la bibliothèque React c ce ki indik React que nous souhaitons utiliser le hook useState dans notre composant.
import { NavLink } from 'react-router-dom';

function Etat() { //le hook renvoie un tableau et ce hook est 1 fonction qui permet de se brancher sur des fonctonnaloites de React

  const [count, setCount] = useState(0); //le count c la val actuel,setCount c la (f) ki máj la val de letat,et le 0 c la val initial
  return (
    <div>
      <p>Vous avez cliqué {count} fois</p> {/*  donc la il renvoie la val actuel */}
      <button onClick={() => setCount(count + 1)}>
        Cliquez sur moi
      </button>
    </div>
  );
}

export default Etat;