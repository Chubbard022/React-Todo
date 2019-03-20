import React from "react";

const TodoForm = props =>{
    return(
        <form>
            <input 
                type='text'
                placeholder='...todo'
                name='newTodo'
                value={props.newTodo}
                onChange={props.handleChange}
            />
            <button onClick={props.updateTodo}>Add Todo</button>
        </form>
    )
}

export default TodoForm;