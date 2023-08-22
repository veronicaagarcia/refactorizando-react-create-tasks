import React from "react";
import { TodoContext } from "../../TodoContext";

function ModalForm () {

    const {
        addTask,
        setOpenModal,
    } = React.useContext(TodoContext);
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
          <div className="buttonContainer">
            <button
              type="button"
              className="buttonCancel"
              onClick={onCancel}
            >Cancelar</button>
            <button
              type="submit"
              className="buttonAdd"
            >Crearr</button>
          </div>
        </form>
      );
}

export {ModalForm};