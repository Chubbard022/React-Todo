import React from "react";

const Todo = props => {
  return (
    <React.Fragment>
      <p
        className={`task ${props.todo.completed ? "completed" : ""}`}
        onClick={() => props.toggleItem(props.todo.id)}
      >
        {props.todo.task}
      </p>
    </React.Fragment>
  );
};

export default Todo;
