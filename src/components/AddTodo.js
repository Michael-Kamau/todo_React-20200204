import React,{ useState} from 'react';

function AddTodo ({addTodo}) {

    const [value, setValue]=useState("");

    const onSubmit = e=>{
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue("")
    }
    return (
        <form onSubmit={onSubmit} style={{display: 'flex' }}>
            <input type="text" name="title" placeholder="Add Todo ..." style={{flex:'10', padding:'5px'}} value={value} onChange={e=>setValue(e.target.value)}/>
            <input type="submit" value="Add Item" className="btn" style={{flex:'1'}}/>

        </form>
    )
}


export default AddTodo;
