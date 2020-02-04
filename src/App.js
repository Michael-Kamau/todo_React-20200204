import React, {Component} from 'react';
import './App.css';
import Todos from "./components/Todos";
import Header from "./components/layouts/Header";
import AddTodo from "./components/AddTodo";
import Footer from "./components/layouts/Footer";
import uuid from 'uuid'

class App extends Component {

    //Toggle todo completed
    markComplete = (id) => {
        console.log('I am in the App.js')
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        });
    }
//Delete todo item(returning todos that don't match the passed in id
    delTodo = (id) => {
        this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
    }

    //Add Todo
    addTodo=(title)=>{
        const newTodo={
            id:uuid.v4(),
            title,
            completed: false
        }
        this.setState({todos:[...this.state.todos,newTodo]})
    }
    state = {
        todos: [
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
        ]
    }

    render() {
        console.log(this.state.todos)
        return (
            <div className="App">
                <div className="container">
                    <Header/>
                    <AddTodo addTodo={this.addTodo}/>
                    <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;
