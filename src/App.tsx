import React from 'react';
import './App.css';
import {FaCalendar} from 'react-icons/fa';
import InputForm from "./components/input-form";
import Divider from "./components/divider";
import Counter from "./components/counter";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Todo</h1>
                <div className="App-header-date">
                    <div className="App-header-date-text">
                        <h2>Today</h2>
                        <p>17 Feb 2022</p>
                    </div>
                    <FaCalendar/>
                </div>
            </header>
            <Divider/>
            <InputForm/>
            <Divider/>
            <Counter/>
        </div>
    );
}

export default App;
