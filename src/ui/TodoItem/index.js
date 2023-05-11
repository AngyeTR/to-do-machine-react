import React from "react";
import "./TodoItem.css";
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { EditIcon } from '../TodoIcon/EditIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';

function TodoItem(props) {

    return (
      <li className="todoItem">
        <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />
      <p
        className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
      >
        {props.text}
      </p>
      <EditIcon
        onEdit={props.onEdit}
      />
      <DeleteIcon
        onDelete={props.onDelete}
      />
      </li>
      );
}

export { TodoItem };