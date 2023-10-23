import React from "react";
import { useLocation } from "react-router-dom";

export default function UserPage() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    // Retrieve name and email from query parameters
    const name = searchParams.get("name");
    const email = searchParams.get("email");

    return (
        <div className="App-user">
            <div className="App-user-image">
                <img src="https://i.pravatar.cc/300" alt="user" />
            </div>
            <div className="App-user-details">
                <div className="App-user-details-name">{name}</div>
                <div className="App-user-details-email">{email}</div>
            </div>
        </div>
    );
}
