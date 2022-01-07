import React, {useState} from "react";
import TodoForm from "../Component-list/todoForm";
import Todos from '../Component-list/todos'
import './To-do-App.css'

function Todo(){
    const [todos1, setTodos1] = useState([]);

    const addTodos = (todo)=>{
        if(todo.text === ''){
            return
        }
        const newTodo = [todo, ...todos1];
        setTodos1(newTodo);      
    }

    const removeTodo = (id)=>{
        const removedArr = [...todos1].filter(e=>e.id!==id);
        setTodos1(removedArr);
    }

    const updateTodo = (id, val)=>{
        if(val.text===''){
            return
        }
        setTodos1(prev=>prev.map(item=>item.id===id? val: item));
    }

    return(
        <div className="background">
            <TodoForm  onSubmit = {addTodos}/>
            <Todos todos = {todos1} removeTodo = {removeTodo} updateTodo={updateTodo} />
        </div>
    )
}

export default Todo;