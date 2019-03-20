import React from "react"
import Todo from './Todo';

const TodoList = props =>{
    return(
        <div>
            {
                props.todoList.map(todo=>{
                <Todo key={todo.id} todoData={todo} />
                })
            }
        </div>
    )
}

export default TodoList;