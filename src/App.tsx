import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/home";
import UserPage from "./components/user-page";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/user" element={<UserPage/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
