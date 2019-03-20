import React from "react"
import Todo from './Todo';

const TodoList = props =>{
    return(
        <div>
            {
                props.todoList.map(todo=>{
                <Todo
                 key={props.todoList.id} 
                 todoData={props.todoList.todo}
                  />
                })
            }
        </div>
    )
}

export default TodoList;