import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import "../assets/styles/style.css";

function TexteClickable() {
  const [isOpen, setIsOpen] = useState(false);// ici on la initialisé á ce quil soit fermé par defaut 

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    // ...
    <div className="col-6">
      <div className="kestion d-flex justify-content-between align-items-center">
        <p className="p-0 m-0" onClick={toggleOpen}>
          Question question?
        </p>
        <Icon
          icon="ph:plus-light"
          color="#908f8f"
          width="32"
          height="32"
          onClick={toggleOpen}
        />
      </div>
      {isOpen && (
        <div className="content kestion d-flex justify-content-between align-items-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab sed
          iste vero error odio, repellat aperiam officia saepe corrupti
          veritatis, aliquid delectus doloribus quam! Quia ratione ex amet
          voluptatum.{" "}
        </div>
      )}
    </div>
    // ...
  );
}
export default TexteClickable;
