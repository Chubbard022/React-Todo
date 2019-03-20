import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state={
      todo:[

      ],

      newTodo:'',
    }
  }

  handleChange = event =>{
    console.log(event.target)
    this.setState({task: event.target.value})
  }

updateTodo = event =>{
  event.preventDefault();

  const newTodo = [
    ...this.state.todo,
    { task:this.state.newTodo, id:Date.now(), completed:false } 
  ]
  

  this.state({ 
    todo:newTodo,
    newTodo:''
  })
}
 

  render() {
    return (
      <div>
        <h2>ToDo List</h2>

        <TodoList 
          todoList={this.state.todo} 
        />

        <TodoForm 
          handleChange={this.handleChange} 
          newTodo={this.state.newTodo}
          updateTodo={this.updateTodo}
          />
      </div>
    );
  }
}

export default App;
