import React from "react";
import { TodoContext} from "../TodoContex";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  const {openModal, 
    setOpenModal } = React.useContext(TodoContext);
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