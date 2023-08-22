import React from "react";
import {TaskIcon} from '.';

function DeleteTask ({onDelete}) {
    return (
       <TaskIcon 
       type= 'delete'
       color='#f33926'
       onClick={onDelete}
       /> 
    )
};

export {DeleteTask}