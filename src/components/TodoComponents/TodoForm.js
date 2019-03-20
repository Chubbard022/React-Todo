import React from "react";

const TodoForm = props =>{
    return(
        <form onSubmit={props.updateTodo}>
            <input 
                type='text'
                placeholder='...todo'
                value={props.newTodo}
                onChange={props.handleChange}
            />
            <button>Add Todo</button>
        </form>
    )
}

export default TodoForm;