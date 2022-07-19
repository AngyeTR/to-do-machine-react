import React from "react";
import { TodoContext } from "../TodoContex";
import "./todoForm.css"

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState("");
    const {
        addTodo, 
        setOpenModal
     } = React.useContext(TodoContext);

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
            <label></label>
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
                >
                    Añadir</button>

            </div>
        </form>
    );
}

export { TodoForm }