import React from "react";
import {Link} from "react-router-dom";

export default function User() {
    const userList = [
        {name: "John Doe", email: "john.doe@example.com"},
        {name: "Jane Smith", email: "jane.smith@example.com"},
        {name: "Alice Johnson", email: "alice.johnson@example.com"},
    ];

    return (
        <div className="App-user-list">
            {userList.map((user, index) => (
                <Link
                    to={{
                        pathname: "/user",
                        search: `?name=${user.name}&email=${user.email}`,
                    }}
                    className="App-user-button"
                    key={index}
                >
                    <ul>
                        <li className="App-user-details-name">{user.name}</li>
                    </ul>
                </Link>
            ))}
        </div>
    );
}
