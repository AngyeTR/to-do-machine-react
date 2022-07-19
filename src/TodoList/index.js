import React from "react";
import "./TodoList.css";

function TodoList(props) {
    return (
      <section className="todoList">
        <ul>
        {props.children}
        </ul>
      </section>
      );
}

export { TodoList };