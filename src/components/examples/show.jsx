import React, { useState } from "react";

export const Show = () => {
    const [showText, setShowText] = useState(false);

    const handleClick = () => {
        setShowText((showText) => !showText);
    };

    return (
        <div className="left-example">
            <button onClick={handleClick}>Показать/скрыть текст</button>
            {showText && <p>Этот текст может быть скрыт или показан</p>}
        </div>
    );
};
