import React from "react";
import {TaskIcon} from '.';

function CompleteTask ({completed, onComplete}) {
    return  (
        <TaskIcon 
        type= 'complete'
        color= {completed ? 'green' : 'gray'}
        onClick={onComplete}
        /> 
     )
};

export {CompleteTask}