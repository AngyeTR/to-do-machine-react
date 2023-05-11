import React from "react";
import { useLocalStorage } from "./useLocalStorage";

// const TodoContext = React.createContext();

function useTodos() {
    const {
        item: todos,
        saveItem: saveTodos,
        loading, error,
        syncUp: synTodos,
      } = useLocalStorage("TODOS_V2", []);
      const [searchValue, setSearchValue] = React.useState("");
      //const [openModal, setOpenModal] = React.useState(false);
    
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      let searchedTodos= [];
    
      if(!searchValue.length >=1){
        searchedTodos = todos;
      }
      else {
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        });   
      }

      const findTodo = (id => {
        const todoIndex = todos.findIndex( todo => todo.id === id);
        return todos[todoIndex]
      })

      const addTodo = (text) => {
        const id= Date.now();
        const newTodos = [...todos];
        newTodos.push({
          completed: false, 
          text: text,
          id
        })
        saveTodos(newTodos);
      };

      const completeTodo = (id) => {
        const todoIndex = todos.findIndex( todo => todo.id === id);
        const newTodos = [...todos];
        newTodos[todoIndex].completed= !newTodos[todoIndex].completed;
        saveTodos(newTodos);
      };

      const editTodo = (id, text) => {
        const todoIndex = todos.findIndex( todo => todo.id === id);
        const newTodos = [...todos];
        newTodos[todoIndex].text= text;
        saveTodos(newTodos);
      };
    
      const deleteTodo = (id) => {
        const todoIndex = todos.findIndex( todo => todo.id === id);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1); 
        saveTodos(newTodos);
      };

    return (
        {
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            editTodo,
            completeTodo,
            deleteTodo,
            findTodo,
            //openModal,
          //setOpenModal,
          synTodos,
        }

    );
}


export { useTodos };