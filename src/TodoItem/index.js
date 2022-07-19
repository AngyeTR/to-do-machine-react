import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  const onComplete = ()=>{
    alert(props.text + " Completed");
  };

  const onDelete = ()=>{
    alert(props.text + " was deleted");
  };

    return (
      <li className="todoItem">
         <span 
         className={`icon icon-check ${props.completed && 'icon-check--active'}`} 
         onClick={ props.onComplete }>
        √
      </span>
      <p className={`todoItem-p ${props.completed && 'todoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="icon icon-delete"
      onClick= { props.onDelete }>
        X
      </span>
      </li>
      );
}

export { TodoItem };