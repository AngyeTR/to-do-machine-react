import React, {useState} from "react";
import "./todoForm.css"

function TodoForm({ addTodo, setOpenModal}){
    const [newTodoValue, setNewTodoValue] = React.useState("");
   

    const onChange = (event)=> {
        setNewTodoValue(event.target.value);
    } ;

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
            value= {newTodoValue}
            onChange= {onChange}
            placeholder="Crea una nueva tarea"></textarea>
            <div className="buttonContainer">
                <button 
                    className="todoForm-button todoForm-button--cancel"
                    type="button"
                    onClick={onCancel} >Cancelar</button>
                <button 
                type="submit"
                className="todoForm-button todoForm-button--add"
                >Añadir</button>

            </div>
        </form>
    );
}

export { TodoForm }