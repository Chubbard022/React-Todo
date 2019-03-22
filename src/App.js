import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./index.css";

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
  //this function gets the value from input and sets the task to that value
  handleChanges = event => {
    this.setState({ task: event.target.value });
  };

  //this function gets the value passed in from input and adds it to the existing array of todo items
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

  //this function allows you to toggle items that have been completed by clicking on them
  toggleItem = id => {
    //console.log(this.state.todoArray[0].id);

    const newTodoArray = [...this.state.todoArray];

    const mappedTodoArray = newTodoArray.map(todoItem => {
      if (todoItem.id === id) {
        todoItem.completed = !todoItem.completed;
        return todoItem;
      } else {
        return todoItem;
      }
    });
    this.setState({ todoArray: mappedTodoArray });
  };

  //this function will return the array of todo items that have not been completed
  clearTodoList = (event) => {
    event.preventDefault();

    const filterTodo = this.state.todoArray.filter(todoItem=> todoItem.completed === false)
    this.setState({todoArray:filterTodo})
  };

  render() {
    return (
      <div className="app">
        <h1 className="title">Add a Todo to the list!</h1>
        <TodoList
          todoListArray={this.state.todoArray}
          toggleItem={this.toggleItem}
        />
        <TodoForm
          changeTodo={this.handleChanges}
          updateTodo={this.updateTodoList}
          clearTodoList={this.clearTodoList}
        />
      </div>
    );
  }
}

export default App;
