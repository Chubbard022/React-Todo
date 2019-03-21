import React from "react";

const TodoForm = props => {
  return (
    <React.Fragment>
      <form>
        <input
          type="text"
          task="task"
          value={props.handleChanges}
          placeholder="add Task"
          onChange={props.changeTodo}
        />
      </form>
      <button onClick={props.updateTodo}>Add Todo</button>
      <button>Delete Todo</button>
    </React.Fragment>
  );
};

export default TodoForm;
