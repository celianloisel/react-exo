import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/home";
import Navigation from "./components/nav";
import User from "./components/user";
import Counter from "./components/counter";
import UserPage from "./components/user-page";

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/counter" element={<Counter/>} />
                <Route path="/user" element={<User/>} />
                <Route path="/user/:name/:email" element={<UserPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
