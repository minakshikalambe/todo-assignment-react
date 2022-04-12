import { useState } from "react";
import {TodoInput} from "./TodoInput";
import {TodoItem} from "./TodoItem";
import { nanoid } from "nanoid";

export function Todo() {
    const [todosList, setTodolist]=useState([]);

    const getData =(todo) =>{
        const payload={
           title:todo,
           status: true,
           id:nanoid(5),
        };
        setTodolist([...todosList, payload]);
    };
    const handleStatus=(id) =>{
        console.log("id", id);
        setTodolist([...todosList.map(e => e.id === id ? {...e, status: !e.status}:e)])
    };
    return(
        <div>
            <TodoInput getData={getData} />
            {
                todosList.map((e)=>(
                <TodoItem handleStatus={handleStatus} todo={e}></TodoItem>
                )) }
        </div>
    )
}