import React from 'react';
import './App.css';
import Todos from "./components/Todos";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

function App () {
    return (
        <div className="App">
            <div className="container">
                <Header/>
                <Todos />
                <Footer/>
            </div>
        </div>
    );
}

export default App;
