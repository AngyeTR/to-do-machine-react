import React from "react";
import { HashRouter, Route, Routes } from 'react-router-dom';
import { EditTodo } from './edit/EditTodo';
import { HomePage } from './home/HomePage';
import { NewTodo } from './new/NewTodo';
import { NotFound } from "./notFound/NotFound";

function App() { 
  return (  
    <HashRouter>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/new" element={ <NewTodo />} />
        <Route path="/edit/:id" element={ <EditTodo /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </HashRouter>
    ); 
}

export {App};
