import { NavLink } from "react-router-dom";
import { useState } from "react";

function Form ()  {
const [name, setName] = useState("");
return (
    <form >
        <label> Saisissez votre nom 
            <input type="text" value={name}/>
        </label>
        <button type="submit">Soumettre</button>

    </form>
    );

}
export default Form;