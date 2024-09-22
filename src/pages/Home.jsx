import React from 'react'
import { useNavigate } from "react-router-dom";

// La navigation programmatique est le processus de navigation/redirigation d'un utilisateur à la suite d'une
//  action sur un itinéraire, comme une action de connexion ou d'inscription, la réussite d'une commande ou
//   lorsqu'il clique sur un bouton de retour.


function Home() {
  const navigate = useNavigate(); // Initialisation du hook

  const goToContact = () => {
    navigate("/contact"); // Redirection vers la page "About"
  };
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={goToContact}>Go to Contact</button>
    </div>)
}

export default Home
