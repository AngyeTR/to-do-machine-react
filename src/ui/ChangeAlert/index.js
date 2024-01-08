import React from "react";
import { useStorageListener } from "./useStorageListener";
import './ChangeAlert.css';

// function ChangeAlert({ sincronize }) {
//     const { show, toggleShow } = useStorageListener(sincronize);

function ChangeAlert({ synchronize }){
        const {show, toggleShow} = useStorageListener(synchronize);

  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>Parece que cambiaste tus Tareas en otra pestaña o ventana del navegador.</p>
          <p>¿Quieres sincronizar tus Tareas?</p>
          <button
            className="TodoForm-button TodoForm-button--add"
            onClick={toggleShow}
          >
            Yes!
          </button>
        </div>
      </div>
    );
    }
    else {
        return null;
    }

    
}

export {  ChangeAlert };