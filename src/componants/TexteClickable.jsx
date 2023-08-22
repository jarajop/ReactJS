import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import "../assets/styles/style.css";

function TexteClickable() {
  const [isOpen, setIsOpen] = useState(false);// ici on la initialisé á ce quil soit fermé par defaut 

  const toggleOpen = () => {
    setIsOpen(!isOpen); // la il permutte just letat de laffichage en fonction du click 
  };

  return (
    // ...
    <div className="col-6">
      <div className="kestion ">
        <div className="d-flex justify-content-between align-items-center w-100">
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab
              sed iste vero error odio, repellat aperiam officia saepe corrupti
              veritatis, aliquid delectus doloribus quam! Quia ratione ex amet
              voluptatum.{" "}
            </p>
          )}
      </div>
    </div>

    // ...
  );
}
export default TexteClickable;
