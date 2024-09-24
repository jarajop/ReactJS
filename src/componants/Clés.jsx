import { NavLink } from "react-router-dom";

function Clés() {
  const plantList = [
    "monstera",
    "ficus lyrata",
    "pothos argenté",
    "yucca",
    "palmier",
  ];
  return (
    // <ul>
    //   {plantList.map((plant) => (
    //     <li>{plant}</li>
    //   ))}
    // </ul>
    <ul>
      {plantList.map((plant, index) => (
        <li key={`${plant}-${index}`}>{plant}</li>
      ))}
    </ul>
  );
}
export default Clés;
