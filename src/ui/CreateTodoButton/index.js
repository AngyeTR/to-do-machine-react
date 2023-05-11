import React from "react";
import { useNavigate } from "react-router-dom"
import "./CreateTodoButton.css";

function CreateTodoButton(props
  //{openModal, setOpenModal}
 ) {
  {/*const navigate = useNavigate();
 const onClickButton = ()=> navigate("/new") */}
    
    //setOpenModal(!openModal);
  
    return (
      <button className="createTodoButton"
      onClick= {props.onClick
        //onClickButton
        }>
        +
      </button>
      );
}

export { CreateTodoButton };