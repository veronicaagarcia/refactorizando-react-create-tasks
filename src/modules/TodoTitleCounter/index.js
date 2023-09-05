import React from "react";
import "./TodoCounter.css";

function TodoTitleCounter ({completedTasks, totalTasks, loading}) {
  return (
    <h2 className={`TodoCounter ${!!loading && `TodoCounter--loading`}`}> Has completado {completedTasks} de {totalTasks} tareas </h2>
  )}
export {TodoTitleCounter};