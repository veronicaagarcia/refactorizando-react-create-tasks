import './TodoListAndSearch.css';

function TodoListAndSearch({children}) {
    return (
      <div className="TodoListAndSearch">
        {children}
      </div>
    );
  }

export {TodoListAndSearch};