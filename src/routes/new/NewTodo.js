import React from "react";
import { TodoForm } from "../../ui/TodoForm/index"
import { useTodos } from "../useTodos";

function NewTodo(){
    const { addTodo } = useTodos();
    return (
        <TodoForm  
        label="Escribe tu nueva Tarea"
        submitText="Añadir"
        submitEvent={(text, priority, endDate) => addTodo(text, priority, endDate)}/>
    ) 
}

export { NewTodo };