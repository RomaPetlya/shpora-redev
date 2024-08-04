import React, { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((count) => count + 1);
    };

    return (
        <div className="left-example">
        <p>Счетчик: {count}</p>
        <button onClick={increment}>Увеличить</button>
        </div>
    );
    };