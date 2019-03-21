import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <React.Fragment>
      {props.todoListArray.map((todoItem, index) => {
        return <Todo todo={todoItem} key={index} />;
      })}
    </React.Fragment>
  );
};

export default TodoList;
