import React from "react";

export const LifeCycleComponent = () => {
    return (
        <>
            <h2>LifeCycle (useEffect)</h2>
            <h3>Что такое LifeCycle (useEffect)</h3>
            <p>
                <span className="highlight">LifeCycle</span> в React - это набор
                этапов, через которые компонент проходит, чтобы правильно
                работать на странице.{" "}
            </p>
            <p className="bold">
                Методы жизненного цикла в React можно разделить на следующие
                группы:
            </p>
            <ol className="list">
                <li className="list-text">
                    Методы монтирования (Mounting Methods):
                    <ul className="list">
                        <li className="list-item">
                            <span className="highlight">constructor()</span>
                        </li>
                        <li className="list-item">
                            <span className="highlight">render()</span>
                        </li>
                        <li className="list-item">
                            <span className="highlight">
                                componentDidMount()
                            </span>
                        </li>
                    </ul>
                </li>
                <li className="list-text">
                    Методы обновления (Updating Methods):
                    <ul className="list">
                        <li className="list-item">
                            <span className="highlight">
                                shouldComponentUpdate()
                            </span>
                        </li>
                        <li className="list-item">
                            <span className="highlight">render()</span>
                        </li>
                        <li className="list-item">
                            <span className="highlight">
                                componentDidUpdate()
                            </span>
                        </li>
                    </ul>
                </li>
                <li className="list-text">
                    Методы размонтирования (Unmounting Methods):
                    <ul className="list">
                        <li className="list-item">
                            <span className="highlight">
                                componentWillUnmount()
                            </span>
                        </li>
                    </ul>
                </li>
                <li className="list-text">
                    Методы обработки ошибок (Error Handling Methods):
                    <ul className="list">
                        <li className="list-item">
                            <span className="highlight">
                                componentDidCatch()
                            </span>
                        </li>
                    </ul>
                </li>
            </ol>
            <h3>Жизненный цикл функциональных компонентов:</h3>
            <p>
                <span className="highlight">useEffect</span> это хук в React,
                предназначенный для работы с методами жизненного цикла в
                функциональных компонентах.
            </p>
            <p>
                <span className="bold">Первый параметр:</span> Функция, которая
                должна выполниться при монтировании компонента и при каждом
                обновлении.
            </p>
            <p>
                <span className="bold">Второй параметр:</span> Массив
                зависимостей определяет, на что конкретно должен реагировать{" "}
                <span className="highlight">useEffect</span>. Если массив пуст,
                <span className="highlight">useEffect</span> выполняется только
                при монтировании и размонтировании. Если в массиве указаны
                определенные значения, то{" "}
                <span className="highlight">useEffect</span> будет выполняться
                только тогда, когда эти значения изменяются.
            </p>
            <pre>
                {`
            // Отработает как componentDidMount
            useEffect(() => { console.log("componentDidMount") }, []) 

            // Отработает как componentDidUpdate 
            useEffect(() => { console.log("componentDidUpdate") }, [dependency]) 

            // Отработает как componentDidMount и componentDidUpdate
            useEffect(() => { console.log("componentDidMount и componentDidUpdate") }) 

            // Отработает как componentWillUnmount
            useEffect(() => {
            return () => console.log('componentWillUnmount')
            }, [])
                `}
            </pre>
            <details open>
                <summary>
                    <span>
                        Пример монтирования компонента и функция, которая будет
                        выполнена при размонтировании:
                    </span>
                </summary>
                <pre>
                    {`
        import React, { useState, useEffect } from 'react';

        const Example = () => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            console.log('Компонент был монтирован');
            return () => {
            console.log('Компонент будет размонтирован');
            };
        }, []); // Пустой массив зависимостей и возвращает функцию, 
                            // а значит выполнится только при монтировании и размонтировании

        return (
            <div>
            <p>Счетчик: {count}</p>
            <button onClick={() => setCount((count) => count + 1)}>Увеличить</button>
            </div>
        );
        }

        export default Example;
        `}
                </pre>
            </details>
            <details open>
                <summary>
                    <span>Пример монтирования компонента с зависимостью:</span>
                </summary>
                <pre>
                    {`
       import React, { useState, useEffect } from "react";

        const Example = () => {
        const [count, setCount] = useState(0);
        const [message, setMessage] = useState("");

        useEffect(() => {
            setMessage('Счетчик изменен на: ${`count`}');
        }, [count]); // Зависимость [count] - выполнится при изменении состояния count

        return (
            <div>
            <p>{message}</p>
            <p>Счетчик: {count}</p>
            <button onClick={() => setCount((count) => count + 1)}>Увеличить</button>
            </div>
        );
        };

        export default Example;
        `}
                </pre>
            </details>
            <h3>Жизненный цикл классовых компонентов:</h3>
            <ol className="list">
                <li className="list-text">
                    Методы монтирования (Mounting Methods):
                    <ul className="list">
                        <li className="list-item">
                            <span className="highlight">constructor()</span>{" "}
                            Вызывается при создании экземпляра компонента.
                            Используется для инициализации состояния и привязки
                            методов.
                        </li>
                        <li className="list-item">
                            <span className="highlight">render()</span>{" "}
                            Отрисовывает компонент и возвращает React элементы.
                        </li>
                        <li className="list-item">
                            <span className="highlight">
                                componentDidMount()
                            </span>{" "}
                            Вызывается после рендеринга компонента и его
                            добавления в DOM. Используется для выполнения
                            запросов к серверу, подписки на события и других
                            побочных эффектов.
                        </li>
                    </ul>
                    <details open>
                        <summary>
                            <span>Пример</span>
                        </summary>
                        <pre>
                            {`
        class MyComponent extends React.Component {
        constructor (props) {
            super(props)
            this.state = { count: 0 }
            this.increment = this.increment.bind(this)
        }

        increment () {
            this.setState({ count: this.state.count + 1 })
        }

        componentDidMount () {
            // Здесь можно выполнять запросы к серверу.
            console.log('Компонент был смонтирован!')
        }

        render () {
            return (
            <div>
                <p>Количество: {this.state.count}</p>
                <button onClick={this.increment}>+++</button>
            </div>
            )
        }
        }
        `}
                        </pre>
                    </details>
                </li>
                <li className="list-text">
                    Методы обновления (Updating Methods):
                    <ul className="list">
                        <li className="list-item">
                            <span className="highlight">
                                shouldComponentUpdate()
                            </span>{" "}
                            Вызывается перед обновлением компонента.
                            Используется для оптимизации перерисовки компонента
                            путем возврата{" "}
                            <span className="highlight">false</span>, если
                            обновление не требуется.
                        </li>
                        <li className="list-item">
                            <span className="highlight">render()</span>{" "}
                            Отрисовывает компонент и возвращает React элементы.
                        </li>
                        <li className="list-item">
                            <span className="highlight">
                                componentDidUpdate()
                            </span>{" "}
                            Вызывается после обновления компонента и его
                            рендеринга. Используется для выполнения
                            дополнительных действий после обновления компонента,
                            например, для выполнения запросов к серверу на
                            основе новых пропсов.
                        </li>
                    </ul>
                    <details open>
                        <summary>
                            <span>Пример</span>
                        </summary>
                        <pre>
                            {`
        class MyComponent extends React.Component {
        shouldComponentUpdate (nextProps, nextState) {
            // В этом примере компонент будет обновляться только при изменении свойства name.
            return nextProps.name !== this.props.name
        }

        componentDidUpdate (prevProps, prevState) {
            // Здесь можно выполнять действия после обновления компонента.
            console.log('Компонент был обновлен!')
        }

        render () {
            return <div>Hello, {this.props.name}!</div>
        }
        }
        `}
                        </pre>
                    </details>
                </li>
                <li className="list-text">
                    Методы размонтирования (Unmounting Methods):
                    <ul className="list">
                        <li className="list-item">
                            <span className="highlight">
                                componentWillUnmount()
                            </span>{" "}
                            Вызывается перед удалением компонента из DOM.
                            Используется для выполнения необходимых очисток,
                            отписки от событий и освобождения ресурсов.
                        </li>
                        <details open>
                            <summary>
                                <span>Пример</span>
                            </summary>
                            <pre>
                                {`
        import React from 'react'

        class WillUnmountExample extends React.Component {
        constructor (props) {
            super(props)
            this.state = {
            time: 0
            }
        }

        componentDidMount () {
            this.timerID = setInterval(() => {
            this.setState(prevState => ({
                time: prevState.time + 1
            }))
            }, 1000)
        }

        componentWillUnmount () {
            clearInterval(this.timerID)
            alert('Компонент удален из DOM')
        }

        render () {
            return (
            <div>
                <p>Время: {this.state.time} секунд</p>
            </div>
            )
        }
        }

        export default WillUnmountExample
        `}
                            </pre>
                        </details>
                    </ul>
                </li>
                <li className="list-text">
                    Методы обработки ошибок (Error Handling Methods):
                    <ul className="list">
                        <li className="list-item">
                            <span className="highlight">
                                componentDidCatch()
                            </span>{" "}
                            Вызывается при возникновении ошибки в дочерних
                            компонентах. Используется для отлавливания и
                            обработки ошибок.
                        </li>
                        <details open>
                            <summary>
                                <span>Пример</span>
                            </summary>
                            <pre>
                                {`
        class MyComponent extends React.Component {
        shouldComponentUpdate (nextProps, nextState) {
            // В этом примере компонент будет обновляться только при изменении свойства name.
            return nextProps.name !== this.props.name
        }

        componentDidUpdate (prevProps, prevState) {
            // Здесь можно выполнять действия после обновления компонента.
            console.log('Компонент был обновлен!')
        }

        render () {
            return <div>Hello, {this.props.name}!</div>
        }
        }
        `}
                            </pre>
                        </details>
                    </ul>
                </li>
            </ol>
        </>
    );
};
