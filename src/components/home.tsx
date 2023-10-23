import React from "react";
import {FaCalendar} from "react-icons/fa";
import Divider from "./divider";
import InputForm from "./input-form";
import ProductList from "./product-list";

export default function HomePage() {
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
            <ProductList/>
        </div>
    )
}