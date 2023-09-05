import React from "react";
import "./Modal.css";

function ModalForm ({addTask, setOpenModal}) {

  const [newTaskValue, setNewTaskValue] = React.useState('');
    
  const onSubmit = (event) => {
    event.preventDefault();
    addTask(newTaskValue);
    setOpenModal(false);
  };
    
  const onCancel = () => {
    setOpenModal(false);
  };
    
  const onChange = (event) => {
    setNewTaskValue(event.target.value);
  };
    
  return (
  <form onSubmit={onSubmit}>
    <label>Escribe tu nueva tarea</label>
    <textarea
      placeholder='Tarea numero 1'
      value={newTaskValue}
      onChange={onChange}
    />
    <div className="TodoForm-buttonContainer">
      <button
        type="button"
        className="TodoForm-button TodoForm-button--cancel"
        onClick={onCancel}
      >Cancelar</button>
      <button
        type="submit"
        className="TodoForm-button TodoForm-button--add"
      >Crear</button>
    </div>
  </form>
  );
}

export {ModalForm};