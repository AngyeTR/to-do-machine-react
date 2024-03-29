import React from "react";
import { TodoContext } from "../App/useTodos";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue, loading }) {

    
    const onSearchValueChange = (event)=>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };
    
    return (
        <input placeholder="Buscar" className="todoSearch"
        onChange={ onSearchValueChange } value={ searchValue }
        disabled={loading}/>
      
    );
}

export { TodoSearch };