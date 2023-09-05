import React from 'react';
import '../TodoNewOne'; 

function NoTodoFound ({searchValue}) {
    return (
        <p className='TodoNewOne'> No hay Tareas que contengan {searchValue}</p>
    )
};

export { NoTodoFound}