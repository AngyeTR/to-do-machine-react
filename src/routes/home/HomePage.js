import React from "react";
import { useNavigate } from "react-router-dom"
import { useTodos } from "../useTodos"
import { TodoHeader } from '../../ui/TodoHeader';
import { TodoCounter } from '../../ui/TodoCounter';
import { TodoSearch } from '../../ui/TodoSearch';
import { TodoList } from '../../ui/TodoList';
import { TodoItem } from '../../ui/TodoItem';
import { TodosError } from '../../ui/TodosError';
import { TodosLoading } from '../../ui/TodosLoading';
import { EmptyTodos } from '../../ui/EmptyTodos';
import { CreateTodoButton } from '../../ui/CreateTodoButton';
import { ChangeAlert } from '../../ui/ChangeAlert';


function HomePage() { 
  const navigate = useNavigate();

  const {error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    //openModal,
    //setOpenModal,
    totalTodos, 
    completedTodos, 
    searchValue, 
    setSearchValue,
    //addTodo, 
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
             key={todo.id}
             text={todo.text}
             priority={todo.priority}
             endDate={todo.endDate}
             completed={todo.completed}
             onComplete={() => completeTodo(todo.id)}
             onEdit={() => 
              navigate("/edit/" + todo.id, {
                state: { todo }
              }) }
             onDelete={() => deleteTodo(todo.id)}
           />
           )} 
        >
      </TodoList>

      {/*
      {!!openModal && (
          <Modal>
            <TodoForm addTodo={addTodo} setOpenModal= {setOpenModal}/>
          </Modal>
      )}
      */}

      <CreateTodoButton  
      //setOpenModal= {setOpenModal} 
      onClick={ () => navigate("/new")}
      //openModal ={openModal}
      />

      <ChangeAlert
      synchronize = {synTodos}/>
    </React.Fragment>
  ); 
}

export  {HomePage};
