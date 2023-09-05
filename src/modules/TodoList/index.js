import React from 'react';
import './TodoList.css';
function TodoList (props) {
    const renderFunction = props.children || props.render;
    return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && !props.totalTasks) && props.onEmptyTodos()}
      {(props.totalTasks !== 0 && !props.searchedTodo.length)&& props.onEmptySearch(props.searchValue)}

      {props.searchedTodo.map(renderFunction)}
    </section>
    )
};

export {TodoList};