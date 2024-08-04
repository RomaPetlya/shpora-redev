import React from "react";
import { Counter } from "../examples/counter";
import { Show } from "../examples/show";
import { Input } from "../examples/input";
import { Style } from "../examples/style";

export const StateComponent = () => {
    return (
        <>
            <h2>State (useState)</h2>
            <h3>Что такое State</h3>
            <p>
                При разработке приложений состояние (state) играет важную роль.
                Оно представляет собой данные, которые используются внутри
                компонента для отслеживания и обновления информации. Состояние
                позволяет компонентам быть динамичными и реагировать на
                изменения данных или взаимодействие пользователя
            </p>
            <p>
                В React есть возможность использовать{" "}
                <span className="highlight">state</span> в функциональных
                компонентах, путем использования хука{" "}
                <span className="highlight">useState</span> .
            </p>
            <pre>
                {` 
        import React, {useState} from 'react';
                
        const [state, setState] = useState(initialState);
          `}
            </pre>

            <p>
                Хук <span className="highlight">useState</span> позволяет
                функциональным компонентам в React добавлять локальное
                состояние.{" "}
            </p>
            <ul className="list">
                <p className="list-text">Он возвращает массив с парой значений: </p>
                <li className="list-item">текущее значение состояния.</li>
                <li className="list-item"> функцию для его обновления. </li>
            </ul>
            <ul className="list">
                <p className="list-text">
                    При вызове функции обновления, React перерисует компонент с
                    новым значением состояния.
                </p>
                <li className="list-item">
                    <span className="highlight">state</span>: текущее значение
                    состояния.
                </li>
                <li className="list-item">
                    <span className="highlight">setState</span>: функция для
                    обновления значения состояния.
                </li>
            </ul>
            <ul className="list">
                <p className="list-text">Параметры</p>
                <li className="list-item">
                    <span className="highlight">initialState</span>
                    (необязательный): начальное значение состояния. Может быть
                    примитивным{" "}
                </li>
            </ul>
            <p className="bold">
                State можно передавать в дочерние компоненты при помощи props.
            </p>
            <h3>Примеры использования state в компонентах</h3>
            <details open>
                <summary>
                    <span>
                        Пример использования состояния для отслеживания текущего
                        счетчика и его отображения:
                    </span>
                </summary>
                <div className="example">
                    <Counter />
                    <pre className="code-example">
                        {`
        import React, { useState } from "react";

        export const Counter = () => {
            const [count, setCount] = useState(0);

            const increment = () => {
                setCount((count) => count + 1);
            };

        return (
            <div className="counter">
            <p>Счетчик: {count}</p>
            <button onClick={increment}>Увеличить</button>
            </div>
        );
        };
        `}
                    </pre>
                </div>
            </details>
            <details open>
                <summary>
                    <span>Управление отображением элементов</span>
                </summary>
                <div className="example">
                    <Show />
                    <pre className="code-example">
                        {`
        import React, { useState } from "react";

        const Example = () => {
        const [showText, setShowText] = useState(false);

        const handleClick = () => {
            setShowText((showText) => !showText);
        };

        return (
            <div>
            <button onClick={handleClick}>Показать/скрыть текст</button>
            {showText && <p>Этот текст может быть скрыт или показан</p>}
            </div>
        );
        };
        `}
                    </pre>
                </div>
            </details>
            <details open>
                <summary>
                    <span>Управление input-ом</span>
                </summary>
                <div className="example">
                    <Input />
                    <pre className="code-example">
                        {`
        import React, { useState } from 'react';

        const Example = () => {
        const [name, setName] = useState('');

        const handleChange = (event) => {
            setName(event.target.value);
        }

        return (
            <div>
            <label>
                Введи свое имя:
                <input type="text" value={name} onChange={handleChange} />
            </label>
            <p>Привет, {name}!</p>
            </div>
        );
        }
        `}
                    </pre>
                </div>
            </details>
            <details open>
                <summary>
                    <span>Управление стилями</span>
                </summary>
                <div className="example">
                    <Style />
                    <pre className="code-example">
                        {`
       import React, { useState } from 'react';

        const Example = () => {
        const [color, setColor] = useState('red');

        const handleClick = () => {
            setColor(color === 'red' ? 'blue' : 'red');
        }

        const style = {
            color: color
        };

        return (
            <div>
            <button onClick={handleClick}>Сменить цвет</button>
            <p style={style}>Этот текст может быть красным или синим</p>
            </div>
        );
        }
        `}
                    </pre>
                </div>
            </details>
            <h3>State с объектом</h3>
            <p>
                Важно помнить, что при обновлении объекта в состоянии нужно
                создавать новый объект вместо изменения существующего, чтобы
                соблюсти принцип неизменяемости.
            </p>
            <pre>
                {`
        const UserProfile = () => {
        const [user, setUser] = useState({
            name: '',
            age: '',
            email: ''
        });

        const handleChange = (e) => {
            const { name, value } = e.target;
            // создаем новый объект с обновленным свойством
            setUser(prevUser => ({
            ...prevUser,
            [name]: value
            }));
        };
        `}
            </pre>
            <ul className="list">
                <p className="list-text">Важные моменты</p>
                <li className="list-item">
                    Не изменять существующее состояние напрямую: Вместо этого
                    создавать новый объект с помощью оператора spread. Это
                    позволяет React правильно отслеживать изменения состояния и
                    ререндерить компонент при необходимости.
                </li>
                <li className="list-item">
                    Использовать функцию для обновления состояния: Когда новое
                    состояние зависит от предыдущего, всегда! использовать
                    функцию для обновления, чтобы избежать проблем с
                    конкурентным обновлением состояния.
                </li>
            </ul>
            <h3>Сравнение функционального и классового компонентов</h3>
            <pre>
                {`
                import React, { useState } from 'react';

                const Example = () => {
                const [count, setCount] = useState(0);

                const handleClick = () => {
                    setCount(count + 1);
                }

                return (
                    <div>
                    <p>Ты кликнул {count} раз</p>
                    <button onClick={handleClick}>Кликни сюда</button>
                    </div>
                );
                }
                `}
            </pre>
            <pre>
                {`
               class Example extends React.Component {
                constructor() {
                    this.state = { count: 0 }
                }

                handleClick = () => {
                    this.setState((state) => ({ count: state.count + 1 }));
                }

                render() {
                    return (
                        <div>
                            <p>Ты кликнул {this.state.count} раз</p>
                            <button onClick={handleClick}>Кликни сюда</button>
                        </div>
                    );
                }
                }
                `}
            </pre>
        </>
    );
};
