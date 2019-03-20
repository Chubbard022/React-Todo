import React from "react";

const TodoForm = props =>{
    return(
        <form>
            <input 
                type='text'
                task='task'
                value={props.inputText}
                placeholder='...todo'
                onChange={props.handleChange}
            />
        </form>
    )
}

export default TodoForm;