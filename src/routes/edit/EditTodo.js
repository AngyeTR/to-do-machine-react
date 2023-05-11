import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { TodoForm } from "../../ui/TodoForm/index"
import { useTodos } from "../useTodos";
import { Loading } from "../../ui/Loading/Loading";

function EditTodo(){
    const location = useLocation();
    const {editTodo, findTodo, loading } = useTodos();
    const params = useParams();
    const id = Number(params.id);

    let todoText = ""

    if(location.state?.todo){
        todoText = location.state.todo.text;
    }
    else if(loading){
        return <Loading/>

    }
    else {
        const todo = findTodo(id)
        todoText = todo.text;
    } 

    return (
        <TodoForm  
        label="Edita tu TODO"
        prevText = {todoText}
        submitText="Editar"
        submitEvent={(newText) => editTodo(id, newText)}/>
    ) 
    
}

export {EditTodo};