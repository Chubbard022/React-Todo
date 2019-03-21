import React from "react";

const TodoForm = props => {
  return (
    <React.Fragment>
      <form className="form">
        <input
          className="input"
          type="text"
          task="task"
          value={props.task}
          placeholder="add Task"
          onChange={props.changeTodo}
        />
      </form>
      <button className="button add" onClick={props.updateTodo}>
        Add Todo
      </button>
      <button className="button delete" onClick={props.clearTodoList}>
        Delete Todo
      </button>
    </React.Fragment>
  );
};

export default TodoForm;
