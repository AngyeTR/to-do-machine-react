
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./todoForm.css"

function TodoForm(props
    //addTodo, setOpenModal
){
    const navigate = useNavigate();
    const [newTodoValue, setNewTodoValue] = React.useState(props.prevText || "");
   

    const onChange = (event)=> {
        setNewTodoValue(event.target.value);
    } ;

    const onCancel = () => {
        navigate("/")
    };

    const onSubmit = (event) => {
        event.preventDefault();
        props.submitEvent(newTodoValue);
        navigate('/');
        //addTodo(newTodoValue);
        //setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>{props.label}</label>
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
                >{props.submitText}</button>

            </div>
        </form>
    );
}

export { TodoForm }