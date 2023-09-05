import './CreateTodoButton.css';
function TodoButton ({ setOpenModal }) {
    return (
        <button className="CreateTodoButton" 
            onClick={
                () => {
                  setOpenModal(state => !state);
                }
              }
            >Nueva Tarea
        </button>
    )
};

export {TodoButton};