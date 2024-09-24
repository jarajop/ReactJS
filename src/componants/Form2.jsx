import { NavLink } from "react-router-dom";
import { useState } from "react";

import "../assets/styles/form2.css"

function Form2(){
    const [firstName,setFirstName]=useState('') //Déclare l'état 'firstName' avec la valeur initiale ''
    const [lastName,setLastName]=useState('')
    const [error,setError]=useState(false) // Déclare l'état 'error' avec la valeur initiale 'false'

//handleSubmit: Il s'agit d'une fonction appelée lorsque le formulaire est soumis. Elle prend l'événement e en argument et appelle e.preventDefault()
// pr empêcher le comportement par défaut du formulaire (rechargement de la page).
//Ensuite, elle vérifie si les champs du prénom et du nom de famille sont vides. Si l'un des deux champs est vide, elle met à jour l'état error à true

    const handleSubmit=(e)=>{  // Définit la fonction de gestion de soumission 'handleSubmit'
        e.preventDefault(); // Empêche le comportement par défaut du formulaire cad le non rechargement de la page
        if(firstName.length==0||lastName.length==0){
            setError(true)
        }
        if(firstName&&lastName) // Si les champs ne sont pas vides
        {
        console.log("First Name: ",firstName,"\Last Name: ",lastName) //maintenant dans la console
        }
    }
    return(
        <>
           <form onSubmit={handleSubmit}>
               <div className="divv">
                   <input className="champ" placeholder="First Name" onChange={e=>setFirstName(e.target.value)} />
               </div>
               {error&&firstName.length<=0? //Si l'état error est true et si le champ du prénom ou du nom de famille est vide, des éléments label sont
               // rendus pour afficher un message d'erreur sous les champs de saisie vide
               <label>First Name can't be Empty</label>:""}
               <div>
                   <input placeholder="Last Name" onChange={e=>setLastName(e.target.value)} />
               </div>
               {error&&lastName.length<=0?
               <label className="lab">Last Name can't be Empty</label>:""}
               <div>
                   <button className="buttoonn">
                       Submit
                   </button>
               </div>
           </form>
        </>
    );
}
export default Form2;
