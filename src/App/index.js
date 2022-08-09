import React from "react";
import { useTodos } from "./useTodos"
import { TodoContext} from "./useTodos"
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { TodosError } from "../TodosError/index.js";
import { TodosLoading } from "../TodosLoading/index";
import { EmptyTodos } from "../EmptyTodos/index";
import { TodoForm } from "../TodoForm/index";
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import {Modal} from "../Modal/index";
import { ChangeAlert} from "../ChangeAlert";


// const defaultTodos = [
//   {text: "Cortar Cebolla", completed: true},
//   {text: "Aprender React", completed: false},
//   {text: "Buscar Empleo", completed: false},
//   {text: "dormir", completed: true},
  
// ];


function App() { 
  const {error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos, 
    searchValue, 
    setSearchValue,
    addTodo, 
    synTodos,
     } = useTodos();
  return (  
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter 
            totalTodos= {totalTodos}
            completedTodos={completedTodos}
            />
          <TodoSearch 
            searchValue={searchValue}
            setSearchValue= {setSearchValue}
           />

      </TodoHeader>

      <TodoList
      error = { error}
      loading = {loading}
      totalTodos = {totalTodos}
      searchText = {searchValue}
      searchedTodos = {searchedTodos}
      onError={()=> <TodosError/>}
      onLoading={()=> <TodosLoading/>}
      onEmptyTodos = { ()=> <EmptyTodos/>}
      onEmptySearchResults = { (searchText) =>
        <p>No hay resultados para "{searchText}"</p>
      }
       render = {todo => (
         <TodoItem
             key={todo.text}
             text={todo.text}
             completed={todo.completed}
             onComplete={() => completeTodo(todo.text)}
             onDelete={() => deleteTodo(todo.text)}
           />
           )} 
        >
        {/* {todo => (
        <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
      )}  */}

      </TodoList>

  
      {/* <TodoList>
        {error && <p>Aiuuda!</p>}
        {loading && <p>Estamos cargando</p>}
        {(!loading && !searchedTodos.length) && <p>Es hora de crear</p>} 

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList> */}

      {!!openModal && (
          <Modal>
            <TodoForm addTodo={addTodo} setOpenModal= {setOpenModal}/>
          </Modal>
      )}

      <CreateTodoButton  setOpenModal= {setOpenModal} 
      openModal ={openModal}
      />

      <ChangeAlert
      synchronize = {synTodos}/>
    </React.Fragment>
  ); 
}

export default App;
