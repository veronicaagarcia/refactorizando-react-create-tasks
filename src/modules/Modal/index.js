import React from "react";
import ReactDOM from'react-dom';
// import { TodoContext } from "../../TodoContext";
import './Modal.css';


function Modal({ children }) {
    return ReactDOM.createPortal(
      <div className="ModalContainer">
        {children}
      </div>,
      document.getElementById('idModal')
    );
}

// function Modal () {

//     const [newTaskValue, setNewTaskValue] = React.useState('');
//     const onChange = (event) => {
//         setNewTaskValue(event.target.value)
//     }

//     return ReactDOM.createPortal(

//         <TodoContext.Consumer>
//       {({
//             addTask,
//             setOpenModal
//       }) => (

//             <form onSubmit={(event)=> {
//                 event.preventDefault();
//                 addTask(setNewTaskValue);
//                 setOpenModal(false);

//             }}>
//                 <label>Escribe tu nueva tarea</label>
//                 <textarea placeholder='Tarea numero 1'
//                 value={newTaskValue}
//                 onChange={onChange}></textarea>
//                 <button type='button'
//                 onClick= {() => {
//                     setOpenModal(false)
//                 }}
//                 >Cancelar
//                 </button>
//                 <button type='submit'>Crear</button>
//             </form>,
//             document.getElementById('idModal')

//         )}
//         </TodoContext.Consumer>
//     )
// }

export {Modal};