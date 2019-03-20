import Todo from './Todo';
import TodoForm from './TodoForm';

import React from "react"

const TodoList = props =>{
    return(
        <div>
        <Todo />
        <TodoForm />
        </div>
    )
}

export default TodoList;