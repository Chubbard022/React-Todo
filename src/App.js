import React from 'react';

import TodoList from './components/TodoComponents/TodoList';

const todo = [
  {todo:'eat',
   id:12341245,
   completed:false
  },
  {
    todo:'sleep',
   id:123245,
   completed:false
  }
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state={
      todoList: todo,
      task:'',
      id:'',
      completed: false
    }
  }

  handleChange = event =>{
    console.log(event.target)
    this.setState({[event.target.todo]: event.target.value})
  }

  updateList = event =>{
    event.preventDefault();
    const newTodo = {
      todo:this.state.todo,
      id:this.Date(),
      completed: false
    }
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    })
  }
  

  render() {
    return (
      <div>
        <h2>ToDo List</h2>
        <TodoList />
      </div>
    );
  }
}

export default App;
