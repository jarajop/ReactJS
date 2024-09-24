import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function FormCopie() {
    const [Pers, setPers]=useState({
        nom:"",
        prenom:"",
        age:"",
        civilite:"",
 }) ;
 const [empty, setIsempty] = useState(false); 

 const handleInput=(e)=>{
    setPers({...empty,[e.target.name]: e.target.value})
 }

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
    <div>Bonjour</div>
  )
}

export default FormCopie ;