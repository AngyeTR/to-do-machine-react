import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton({openModal, 
  setOpenModal }) {
  const onClickButton = ()=> {
    setOpenModal(!openModal);
  }
    return (
      <button className="createTodoButton"
      onClick= {onClickButton}>
        +
      </button>
      );
}

export { CreateTodoButton };