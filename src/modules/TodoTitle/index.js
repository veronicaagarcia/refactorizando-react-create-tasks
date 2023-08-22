import React from "react";
import { TodoContext } from "../../TodoContext";

function TodoTitle () {

  const {
    completedTasks: completed,
    totalTasks: total
  } = React.useContext(TodoContext);
  

    return (
      //   <TodoContext.Consumer>
      // {({
      //       completedTasks: completed,
      //       totalTasks: total
      // }) => (
        <h1> Has completado {completed} de {total} tareas </h1>
        )}
//     </TodoContext.Consumer>
//     )
// };

export {TodoTitle};