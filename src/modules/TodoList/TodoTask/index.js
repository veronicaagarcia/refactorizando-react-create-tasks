import './TodoTask.css';
import React from 'react';
import {CompleteTask} from '../../TaskIcon/CompleteTask';
import {DeleteTask} from '../../TaskIcon/DeleteTask';

function TodoTask(props) {
  return (
    <li className="TodoTask">
        <CompleteTask 
        completed = {props.completed}
        onComplete ={props.onComplete}
        />
      <p className={`TodoTask-p ${props.completed && "TodoTask-p--complete"}`}>
        {props.text}
      </p>
      <DeleteTask 
      onDelete ={props.onDelete}
      />
    </li>
  );
}

export {TodoTask};