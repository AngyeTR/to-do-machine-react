import React from "react";
import "./TodoList.css";

function TodoList(props) {
  const renderFunc = props.children || props.render;
    return (
      <section className="todoList TodoList-container">
        {props.error && props.onError()}
        {props.loading && props.onLoading()}
        {(!props.loading && !props.totalTodos) && props.onEmptyTodos()} 
        {props.searchedTodos.map(renderFunc)}
        {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}
        <ul>
        {props.children}
        </ul>
      </section>
      );
}

export { TodoList };