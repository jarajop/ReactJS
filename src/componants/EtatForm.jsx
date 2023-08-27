import { NavLink } from "react-router-dom";
import { useState } from "react";

let formStateData = {
  firstName: "",
  lastName: "",
  email: "",
};

function EtatForm() {
  const [formData, setFormData] = useState(formStateData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    // cette (f) enregistre ls infos saisies au niveau de la console
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName" // il recupere le elements saisies au niveau de la console
        value={formData.firstName}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      /{" "}
    </form>
  );
}

export default EtatForm;
