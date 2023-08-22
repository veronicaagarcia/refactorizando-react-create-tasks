import './App.css';
import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

// const arrayTasks = [
//   {text: 'Escribe una tarea', completed: true},
//   {text: 'Escribe otra tarea', completed: true},
//   {text: 'Escribe dos tarea', completed: false},
//   {text: 'Escribe unas cuantas tarea', completed: false},
//   {text: 'Escribe mil tarea', completed: false},
// ]
// localStorage.setItem('TASKS', JSON.stringify(arrayTasks))



function App() {
  
  return (
    <TodoProvider>
    <AppUI 
    
      // completedTasks = { completedTasks}
      // totalTasks = { totalTasks}
      // searchValue = { searchValue}
      // setSearchValue = { setSearchValue}
      // searchedTodo = { searchedTodo}
      // completeTask = { completeTask}
      // deleteTask = { deleteTask}
      // loading = {loading}
      // error = {error}
    
    />
    </TodoProvider>
  );
}

export default App;