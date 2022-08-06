import React from "react";
import { TodoContext } from "../TodoContex";
import './TodoCounter.css';


function TodoCounter() {
 const { totalTodos, completedTodos } = React.useContext(TodoContext);
    return (
      <h2 className="TodoCounter"> Has Completado {completedTodos} de { totalTodos } TODOs</h2>  
    );
}

export { TodoCounter };