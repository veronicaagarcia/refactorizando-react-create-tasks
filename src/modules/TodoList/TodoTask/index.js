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
      {/* <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}>
        V
      </span> */}
      <p className={`TodoTask-p ${props.completed && "TodoTask-p--complete"}`}>
        {props.text}
      </p>
      <DeleteTask 
      onDelete ={props.onDelete}
      />
      {/* <span className="Icon Icon-delete"
        onClick={props.onDelete}>
        X
      </span> */}
    </li>
  );
}

export {TodoTask};