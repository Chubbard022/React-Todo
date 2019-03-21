import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const todoData = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoArray: todoData,
      task: ""
    };
  }

  handleChanges = event => {
    this.setState({ task: event.target.value });
  };

  updateTodoList = event => {
    event.preventDefault();

    const newTodo = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoArray: [...this.state.todoArray, newTodo],
      task: ""
    });
  };

  render() {
    return (
      <div>
        <h1>Add a Todo to the list!</h1>
        <TodoList todoListArray={this.state.todoArray} />
        <TodoForm
          changeTodo={this.handleChanges}
          updateTodo={this.updateTodoList}
        />
      </div>
    );
  }
}

export default App;
