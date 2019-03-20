import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


const todoArray = [
  {newTodo:'firstTodo'},
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state={
      todo:todoArray,
      newTodo:'',
    }
  }

  handleChange = event =>{
    this.setState({[event.target.name]: event.target.value})
  }

updateTodo = event =>{
  event.preventDefault();
  const newTodoArray = {newTodo:this.state.newTodo}
   console.log(this.state)
  this.setState({ 
    todo: [...this.state.todo,newTodoArray],
    newTodo: ''
  })
}
 

  render() {
    return (
      <div>
        <h1>Add a ToDo!</h1>
          {
            this.state.todo.map((todoItem,index)=>{
            return <TodoList key={index} todoProp={todoItem}/>
            })
          }
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
