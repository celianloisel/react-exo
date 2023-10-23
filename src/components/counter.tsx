import React, {useEffect, useState} from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        if (count === 10 || count === 25 || count === 50 || count === 1000) {
            // Update the displayText state when count reaches the specified values
            setDisplayText(`Count reached: ${count}`);
        } else {
            // Clear the display text if count is not one of the specified values
            setDisplayText("");
        }
    }, [count]);

    return (
        <div className="App-counter">
            <div className="App-counter-part">
                <button onClick={() => setCount(count - 1)}>-</button>
                <p>{count}</p>
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
            <div className="App-counter-text">{displayText}</div>
        </div>
    );
}
