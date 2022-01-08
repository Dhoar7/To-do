import React, {useState} from "react";
import './todoForm.css'

const TodoForm = (props)=>{
    const [input, setInput] = useState('')

    const handleChange = (e)=>{
        setInput(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text: input
        })
        setInput('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" 
            className="todo-Input"
            placeholder="Add a Todo"
            value={input}
            onChange={handleChange}/>
            <button className="todo-button">Add Todo</button>
        </form>
    )
}

export default TodoForm;