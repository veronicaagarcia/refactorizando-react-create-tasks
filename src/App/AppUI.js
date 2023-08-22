import React from 'react';
import { TodoListAndSearch} from '../modules/TodoListAndSearch';
import { TodoTitle } from '../modules/TodoTitle';
import { TodoSearch } from '../modules/TodoSearch';
import { TodoList } from '../modules/TodoList';
import { TodoTask } from '../modules/TodoList/TodoTask';
import { TodoButton } from '../modules/TodoButton';
import { TodoWait } from '../modules/TodoList/TodoWait';
import { TodoError } from '../modules/TodoList/TodoError';
import { TodoNewOne } from '../modules/TodoList/TodoNewOne';
import { Modal } from '../modules/Modal';
import { ModalForm} from '../modules/Modal/ModalForm';
import { TodoContext } from '../TodoContext';

function AppUI () {

    const {
        openModal,
        setOpenModal,
        searchedTodo,
        completeTask,
        deleteTask,
        loading,
        error,
      } = React.useContext(TodoContext);

    return (
    <>
    {/* <TodoListAndSearch> */}
        <TodoTitle />
        <TodoSearch />
        {/* <TodoContext.Consumer>
            {({
                searchedTodo,
                completeTask,
                deleteTask,
                loading,
                error}) => ( */}
                <TodoList>
                {loading && <TodoWait />}
                {error && <TodoError />}
                {(!loading && searchedTodo === 0) && <TodoNewOne />}
                {searchedTodo.map(task => (
                    <TodoTask 
                    key = {task.text} 
                    text = {task.text} 
                    completed = {task.completed} 
                    onComplete = {() => completeTask(task.text)}
                    onDelete = {() => deleteTask(task.text)}
                    />
                ))}
                </TodoList>
            {/* )}
        </TodoContext.Consumer> */}
        <TodoButton 
        setOpenModal={setOpenModal}/>
         {openModal && (
        <Modal>
            <ModalForm /> 
        </Modal> 
         )}
    {/* </TodoListAndSearch> */}
    </>
    );
}

export {AppUI};