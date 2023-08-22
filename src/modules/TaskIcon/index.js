import React from "react";
import {ReactComponent as CompleteIcon} from './CompleteTask.svg';
import {ReactComponent as DeleteIcon} from './DeleteTask.svg';
import './TaskIcon.css'

const IconsType = {
    'complete':(color) => <CompleteIcon className='IconSvg' fill={color} />,
    'delete':(color) => <DeleteIcon className='IconSvg' fill={color}/>,
}
function TaskIcon ({type, color, onClick}) {
    return (
       <span className={`Icon Icon-${type}`}
       onClick={onClick}
       >
        {IconsType[type](color)}
       </span> 
    )
};

export {TaskIcon}
