import React from "react";

export const EventsComponent = () => {
    return (
        <>
            <h2>Events</h2>
            <h3>Events и как работать с ними</h3>
            <p>
                В React события (events) являются важной частью взаимодействия с
                пользователем. Они позволяют обрабатывать действия пользователя,
                такие как клики, наведение, отправка формы и другие.
            </p>
            <p className="bold">
                Привет обработки события{" "}
                <span className="highlight">OnChange</span>:
            </p>
            <pre>
                {`
        const handleChange = (event) => {
        console.log('Изменилось значение:', event.target.value);
        }

        const MyComponent = () => {
        return (
            <input type="text" onChange={handleChange} />
            или
            <input type="text" onChange={event => handleChange(event)} />
        );
        }
            `}
            </pre>
            <p className="bold">Ссылки на документацию по событиям:</p>
            <ol className="list">
                <li className="list-text">
                    <a
                        className="list-link"
                        href="https://developer.mozilla.org/ru/docs/Web/API/Element/click_event"
                    >
                        onClick
                    </a>
                </li>
                <li className="list-text">
                    <a
                        className="list-link"
                        href="https://developer.mozilla.org/ru/docs/Web/API/Element/click_event"
                    >
                        onChange
                    </a>
                </li>
                <li className="list-text">
                    <a
                        className="list-link"
                        href="https://developer.mozilla.org/ru/docs/Web/API/Element/click_event"
                    >
                        onSubmit
                    </a>
                </li>
                <li className="list-text">
                    <a
                        className="list-link"
                        href="https://developer.mozilla.org/ru/docs/Web/API/Element/click_event"
                    >
                        onFocus
                    </a>
                </li>
                <li className="list-text">
                    <a
                        className="list-link"
                        href="https://developer.mozilla.org/ru/docs/Web/API/Element/click_event"
                    >
                        onBlur
                    </a>
                </li>
                <li className="list-text">
                    <a
                        className="list-link"
                        href="https://developer.mozilla.org/ru/docs/Web/API/Element/click_event"
                    >
                        onScroll
                    </a>
                </li>
                <li className="list-text">
                    <a
                        className="list-link"
                        href="https://developer.mozilla.org/ru/docs/Web/API/Element/click_event"
                    >
                        onKeyPress
                    </a>
                </li>
                <li className="list-text">
                    <a
                        className="list-link"
                        href="https://developer.mozilla.org/ru/docs/Web/API/Element/click_event"
                    >
                        onKeyUp
                    </a>
                </li>
                <li className="list-text">
                    <a
                        className="list-link"
                        href="https://developer.mozilla.org/ru/docs/Web/API/Element/click_event"
                    >
                        onKeyDown
                    </a>
                </li>
            </ol>
            <h3>target VS currentTarget</h3>
            <p>
                Отличие между{" "}
                <span className="highlight">event.target.value</span> и
                <span className="highlight">event.currentTarget.value</span>{" "}
                состоит в том, как React интерпретирует их в контексте
                обработчика событий. это хук в React, предназначенный для работы
                с методами жизненного цикла в функциональных компонентах.
            </p>
            <ol className="list">
                <li className="list-text">
                    <span className="highlight">event.target.value</span>: Это
                    значение, которое было изменено в результате действия
                    пользователя. Например, если есть текстовое поле{" "}
                    <span className="highlight">{"<input>"}</span> и
                    пользователь вводит в него текст, то{" "}
                    <span className="highlight">event.target.value</span> будет
                    содержать значение этого текста.
                </li>
                <li className="list-text">
                    <span className="highlight">event.currentTarget.value</span>
                    : Это значение, которое ассоциировано с элементом, к
                    которому привязан обработчик событий. В контексте React{" "}
                    <span className="highlight">currentTarget</span> обычно
                    ссылается на элемент, к которому был привязан обработчик
                    событий, и значение <span className="highlight">value</span>{" "}
                    будет доступно только если этот элемент имеет свойство{" "}
                    <span className="highlight">value</span>, например,{" "}
                    <span className="highlight">{"<input>"}</span>,{" "}
                    <span className="highlight">{"<textarea>"}</span> или{" "}
                    <span className="highlight">{"<select>"}</span>.
                </li>
            </ol>
            <p className="bold">
                Привет обработки события{" "}
                <span className="highlight">event.target.value</span> и{" "}
                <span className="highlight">event.currentTarget.value</span>
            </p>
            <pre>
                {`
        const App = () => {
        const [targetValue, setTargetValue] = useState('')
        const [currentTargetValue, setCurrentTargetValue] = useState('')

        const handleClick = event => {
        // event.target.value — значение элемента, который был непосредственно изменен
        setTargetValue(event.target.value)

        // event.currentTarget.value — значение элемента, к которому привязан обработчик событий
        setCurrentTargetValue(event.currentTarget.value)
        }

        return (
        <div>
            <h1>
            Демонстрация сравнения event.target.value и event.currentTarget.value
            </h1>
            <button value='Parent Button' onClick={handleClick}>
            Parent Button
            <input type='button' value='Child Button' onClick={handleClick} />
            </button>

            <p>event.target.value: {targetValue}</p>
            <p>event.currentTarget.value: {currentTargetValue}</p>
        </div>
        )
        }
            `}
            </pre>
            <p>В этом примере:</p>
            <ol className="list">
                <li className="list-text">
                    Когда кликнешь на кнопку "Parent Button",{" "}
                    <span className="highlight">event.target</span> и
                    <span className="highlight">event.currentTarget</span> будут
                    указывать на один и тот же элемент (кнопку), поэтому оба
                    значения будут "Parent Button".
                </li>
                <li className="list-text">
                    Когда кликнешь на "Child Button",{" "}
                    <span className="highlight">event.target</span> укажет на
                    "Child Button", а{" "}
                    <span className="highlight">event.currentTarget</span>{" "}
                    укажет на "Parent Button", так как обработчик события
                    привязан к элементу{" "}
                    <span className="highlight">{"<button>"}</span>{" "}
                    родительского уровня.
                </li>
            </ol>
        </>
    );
};
