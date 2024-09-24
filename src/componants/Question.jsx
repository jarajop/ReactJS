import React from "react";
import { Icon } from "@iconify/react";

function Question({ questionText, isOpen, toggleOpen }) {
  return (
    <div className="kestion">
      <div className="d-flex justify-content-between align-items-center w-100">
        <p className="p-0 m-0" onClick={toggleOpen}>
          {questionText}
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
  );
}

export default Question;
