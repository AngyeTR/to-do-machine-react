import React from "react";
import { TodoForm } from "../../ui/TodoForm/index"
import { useTodos } from "../useTodos";

function NewTodo(){
    const { addTodo } = useTodos();
    return (
        <TodoForm  
        label="Escribe tu nuevo TODO"
        submitText="Añadir"
        submitEvent={(text) => addTodo(text)}/>
    ) 
}

export { NewTodo };