import React from 'react';

function Header(){
    return (
        <header style={headerStyle}>
            <h1>My Todo List</h1>
        </header>
    )
}

const headerStyle ={
    background:'#193304',
    color:'#fff',
    textAlign:'center',
    padding:'10px'
}

export default Header;
