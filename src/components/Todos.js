import React, { useState, useEffect} from 'react';
import TodoItem from "./TodoItem";
import uuid from 'uuid'
import AddTodo from "./AddTodo";

function Todos() {

    const [todos, setTodos] = useState([
        {
            id: uuid.v4(),
            title: 'Details of the todo',
            completed: false
        },
        {
            id: uuid.v4(),
            title: 'Going to the market',
            completed: false
        },
        {
            id: uuid.v4(),
            title: 'Reading a novel',
            completed: false
        }
    ]);
    //Add Todo
    const addTodo = title => {
        const newTodos = [...todos, {
            id: uuid.v4(),
            title,
            completed: false
        }];
        setTodos(newTodos);
    }
    //delete Todo
    const delTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };
    //toggleComplete
    const toggleComplete=index=>{
        const newTodos=[...todos];
        newTodos[index].completed=!newTodos[index].completed
        setTodos(newTodos);
    }

    useEffect(()=>{
        document.title=todos.length+" todos"
    })

    return (
        <div>
            <AddTodo addTodo={addTodo}/>
            {
                todos.map((todo, index) => (
                    <TodoItem key={index} index={index} todo={todo}  toggleComplete={toggleComplete} delTodo={delTodo}/>
                ))
            }
        </div>

    )
}
export default Todos;
