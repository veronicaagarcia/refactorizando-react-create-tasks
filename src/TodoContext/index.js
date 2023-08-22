import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider ({children}) {

    const {
        item: tasks, 
        saveItem,
        loading,
        error
    } = useLocalStorage('TASKS', []);
    
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    
    const completedTasks = tasks.filter(task => task.completed).length;
    
    const totalTasks = tasks.length;
    
    const searchedTodo = tasks.filter((task)=> {
        const todoText = task.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
    }  
     
    //    return task.text.toLowerCase().includes(searchValue.toLowerCase())}
    );

    const addTask = (text) => {
        const newTask = [...tasks];
        newTask.push({
            text,
            completed: false
        })
        
        saveItem(newTask);
    };

    const completeTask = (text) => {
        const newTask = [...tasks];
        const newTaskIndex = newTask.findIndex(
          (task) => task.text === text
        );
        newTask[newTaskIndex].completed = true;
        saveItem(newTask);
       
    };
    
    const deleteTask = (text) => {
        const newTask = [...tasks];
        const newTaskIndex = newTask.findIndex(
          (task) => task.text === text
        );
        newTask.splice(newTaskIndex, 1);
        saveItem(newTask);
    };

    return (
        <TodoContext.Provider 
        value={
            {
                completedTasks,
                totalTasks,
                searchValue,
                setSearchValue,
                searchedTodo,
                completeTask,
                deleteTask,
                loading,
                error,
                openModal,
                setOpenModal,
                addTask,
            }
        }>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider};