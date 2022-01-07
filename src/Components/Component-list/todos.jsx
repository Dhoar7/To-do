import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import TodoForm from "./todoForm";
import './todos.css'


const Todos = ({todos, removeTodo, updateTodo})=>{
    const [edit, setEdit] = useState({})

    const editTodo = (value)=>{
        updateTodo(edit.id, value);
        setEdit({});
    }

    if(edit.id){
        return <TodoForm onSubmit={editTodo} />
    }

    return todos.map((todo, index)=>(
        <div key ={index} className="first">
            <div key={todo.id} className="text">
                {todo.text}
            </div>
            <div className="icon">
                <MdDelete onClick={()=> removeTodo(todo.id)} className="delete-icon"/>
                <AiFillEdit className="Edit-icon" onClick={()=>setEdit({id: todo.id, value: todo.text})}/>
            </div>
        </div>
    ))
}

export default Todos;