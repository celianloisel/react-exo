import React from "react";
import { useParams } from "react-router-dom";

export default function UserPage() {
    const { name, email } = useParams();

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
