import React from 'react';
import { useTodos } from './useTodos';
import { TodoHeader } from '../modules/TodoHeader';
import { TodoTitleCounter } from '../modules/TodoTitleCounter';
import { TodoSearch } from '../modules/TodoSearch';
import { TodoList } from '../modules/TodoList';
import { TodoTask } from '../modules/TodoList/TodoTask';
import { TodoButton } from '../modules/TodoButton';
import { TodoWait } from '../modules/TodoList/TodoWait';
import { TodoError } from '../modules/TodoList/TodoError';
import { TodoNewOne } from '../modules/TodoList/TodoNewOne';
import { NoTodoFound } from '../modules/TodoList/NoTodoFound';
import { Modal } from '../modules/Modal';
import { ModalForm} from '../modules/Modal/ModalForm';
import { ChangeAlertWithStorageListener } from '../ChangeAlert/index';
import './App.css';

function App() {

  const {
    completedTasks,
    totalTasks,
    searchValue,
    setSearchValue,
    openModal,
    setOpenModal,
    searchedTodo,
    completeTask,
    deleteTask,
    loading,
    error,
    addTask,
    sincronizeItem
  } = useTodos();
  
  return (
    <React.Fragment>
      <TodoHeader
      loading={loading}>
        <TodoTitleCounter
          completedTasks={completedTasks}
          totalTasks={totalTasks}
        />
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>
      <TodoList
        error={error}
        loading={loading}
        searchedTodo={searchedTodo}
        totalTasks={totalTasks}
        searchValue={searchValue}
        onError={() => <TodoError />}
        onLoading={() => <TodoWait />}
        onEmptyTodos={() => <TodoNewOne />}
        onEmptySearch={() => <NoTodoFound 
          searchValue={searchValue}
        />}
      >
        {todo => (
          <TodoTask
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTask(todo.text)}
            onDelete={() => deleteTask(todo.text)}
          />
        )}
      </TodoList>
      <TodoButton setOpenModal={setOpenModal}/>
      {openModal && (
        <Modal>
          <ModalForm 
          addTask={addTask}
          setOpenModal={setOpenModal}
          /> 
        </Modal> 
      )}

      <ChangeAlertWithStorageListener
        sincronize={sincronizeItem}
      />
    </React.Fragment>
  );
}

export default App;