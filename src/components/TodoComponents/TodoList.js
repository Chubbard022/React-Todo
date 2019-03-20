import React from "react"
import Todo from './Todo';

const TodoList = props =>{
    return(
        <div>
            {
              <h3>{props.todoList.newTodo}</h3>
            }
        </div>
    )
}

export default TodoList;