import React from "react";

function TodoItem({todo, index, toggleComplete, delTodo}){
    const getStyle=()=>{
        return{
            backgroundColor:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px #ccc dotted',
            textDecoration:todo.completed ? 'line-through':'none'
        }
    }

    const btnStyle=() =>{
        return{
            backgroundColor:'#ff25c3',
            color:'#fff',
            border:'none',
            padding:'5px 9px',
            borderRadius:'50%',
            cursor:'pointer',
            float:'right'
        }

    }

    return (
        <div style={getStyle()}>

            <p><input type="checkbox" onChange={()=>toggleComplete(index)}/> {' '}
                {todo.title}
                <button style={btnStyle()} onClick={() => delTodo(index)} >Delete</button>
            </p>
        </div>
    )
}

export default TodoItem;
