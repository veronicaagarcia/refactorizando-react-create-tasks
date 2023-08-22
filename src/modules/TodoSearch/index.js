import React from "react";
import { TodoContext } from "../../TodoContext";

function TodoSearch () {

  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);

    return (
      //   <TodoContext.Consumer>
      // {({
      //       searchValue,
      //       setSearchValue
      // }) => (
        <input placeholder='Escribe una tarea' className="TodoSearch"
        value={searchValue}
        onChange={(event) => { setSearchValue(event.target.value)}}
        />
        )}
//     </TodoContext.Consumer>
//     )
// };

export {TodoSearch};