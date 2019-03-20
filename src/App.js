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
    console.log(event.target.value)
    this.setState({[event.target.name]: event.target.value})
  }

updateTodo = event =>{
  event.preventDefault();
  const newTodoArray = {newTodo:this.state.newTodo}
   
  this.setState({ 
    todo: [...this.state.todo,newTodoArray]
  })
}
 

  render() {
    return (
      <div>
            {
      this.state.todo.map((todoItem,index)=>{
              <TodoList key={index} todoItem={todoList}/>
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
