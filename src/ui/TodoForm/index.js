
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./todoForm.css"

function TodoForm(props
    //addTodo, setOpenModal
){
    const navigate = useNavigate();
    const [newTodoValue, setNewTodoValue] = React.useState(props.prevText || "Nueva tarea");
    const [newTodoPriority, setNewTodoPriority] = React.useState(props.prevPriority || "Baja");
    const [newTodoDate, setNewTodoDate] = React.useState(props.prevDate || "Sin fecha límite");

    const onChange = (event)=> {
        setNewTodoValue(event.target.value);
    } ;   
    const onChangePriority = (event)=> {
        setNewTodoPriority(event.target.value);
    } ;   
    const onChangeDate = (event)=> {
        setNewTodoDate(event.target.value);
    } ;
    

    const onCancel = () => {
        navigate("/")
    };

    const onSubmit = (event) => {
        event.preventDefault();
        props.submitEvent(newTodoValue, newTodoPriority, newTodoDate);
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
            placeholder="Crea una nueva tarea"
            autofocus></textarea>
            <div>
                <label for="priority">Prioridad:</label>
                <select id="priority" name="priority" 
                onChange={onChangePriority}
                value= {newTodoPriority}>
                    <option value="Baja">Baja</option>
                    <option value="Media">Media</option>
                    <option value="Alta">Alta</option>
                 </select>
            </div>
           
            <div>
                <label for="end-date">Vencimiento:</label>
                <input type="date" id="end-date" name="end-date"
                onChange={onChangeDate}
                value= {newTodoDate}/>
            </div>
           
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