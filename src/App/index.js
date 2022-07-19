import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContex/index"


// const defaultTodos = [
//   {text: "Cortar Cebolla", completed: true},
//   {text: "Aprender React", completed: false},
//   {text: "Buscar Empleo", completed: false},
//   {text: "dormir", completed: true},
  
// ];


function App() { 
  return (  
    <TodoProvider><AppUI /></TodoProvider>   
  ); 
}

export default App;
