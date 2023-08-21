import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Etat4() {
  const [isOn, setIsOn] = useState(false);// donc la on utilise usestate pr gerer la valeur booleen de IsOn.Sn etat initial est fixé a false

  const toggleSwitch = () => { // nous avons cette fonction ki permettra de faire basculer la val de IsOn chak fois k le bouton est cliqué
    setIsOn(!isOn); // ! ceci est loperateur de negation logik ki permet de basculer de vrai vers faux et vice versa
  };// setIsOn est une fonction fournie par un hook (ici usestate j crois)
// Un peu plus haut IsOn est initialisé á false pr ainsi dire k letat au tt debut sera eteint (on pouvait aussi le faire á allumé par defaut)
  return (
    <div>
      <p>L'interrupteur est {isOn ? 'on' : 'off'}</p>
      <button onClick={toggleSwitch}>Basculer=toogle</button>
    </div>
  );
}
export default Etat4 ;
