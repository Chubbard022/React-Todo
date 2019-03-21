import React from "react";

const Todo = props => {
  return (
    <React.Fragment>
      <p>{props.todo.task}</p>
    </React.Fragment>
  );
};

export default Todo;
