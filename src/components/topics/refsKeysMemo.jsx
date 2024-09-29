export const RefsKeyFragment = () => {
    return (
        <>
            <section>
                <h2>Refs, Fragment, key, React.memo, useMemo</h2>
                <h3>Refs</h3>
                <p>
                    Refs (далее просто "ссылки") предоставляет способ доступа к
                    DOM-узлам или React-элементам, созданным в методе{" "}
                    <span className="highlight">render()</span>.
                </p>
                <p>Есть несколько хороших примеров использования ссылок:</p>
                <ul className="list">
                    <li className="list-item">
                        Управление фокусом, выделение текста.
                    </li>
                    <li className="list-item">Выполнение анимаций.</li>
                    <li className="list-item">
                        Интеграция со сторонними библиотеками,
                        взаимодействующими с DOM.
                    </li>
                </ul>
                <p>
                    <span className="highlight">Управление фокусом</span> -
                    лучший из них:
                </p>
                <details open>
                    <summary>
                        <span>
                            Пример использования ссылки для управления фокусом:
                        </span>
                    </summary>
                    <pre>
                        {`
        import React, { useEffect, useState, Fragment, useRef } from 'react'

        const Test = () => {
            const [text, setText] = useState('')
            const textInput = useRef(null)
            const valid = () => {
                textInput.current.focus()
            }
            return (
                <div>
                    <input ref={textInput} value={text} />
                    <button onClick={() => valid()}>
                        Click to focus
                    </button>
                </div>
            )
        }

        export default Test
            `}
                    </pre>
                </details>
            </section>

            <section>
                <h2>Fragment</h2>
                <p>
                    С помощью фрагментов можно сгруппировать список дочерних
                    элементов без добавления дополнительных узлов в DOM.
                </p>
                <p>
                    Используем <span className="highlight">React.Fragment</span>{" "}
                    или выполняем импорт, чтобы использовать{" "}
                    <span className="highlight">Fragment</span>:
                </p>
                <details open>
                    <summary>
                        <span>
                            Пример использования{" "}
                            <span className="highlight">Fragment</span>:
                        </span>
                    </summary>
                    <pre>
                        {`
        import React, { Fragment } from 'react';

        //Заменяем теги div на Fragment:
        const ChildComponent = () => <Fragment>
            <h1>Hello Child Component</h1>
            <h1>Hello Child Component</h1>
        </Fragment>
            `}
                    </pre>
                </details>
                <p>
                    Существует сокращенная запись (импортировать не нужно), но у
                    нее есть недостаток: нельзя использовать атрибуты, например,{" "}
                    <span className="highlight">className</span> или{" "}
                    <span className="highlight">key</span> 😿:
                </p>
                <details open>
                    <summary>
                        <span>Пример сокращенной записи:</span>
                    </summary>
                    <pre>
                        {`
        //так хорошо
        const ChildComponent = () => <>
            <h1>Hello Child Component</h1>
            <h1>Hello Child Component</h1>
        </>

        //так нельзя. Будет ошибка
        const ChildComponent = () => < className="child">
            <h1>Hello Child Component</h1>
            <h1>Hello Child Component</h1>
        </>
            `}
                    </pre>
                </details>
            </section>
            <section>
                <h2>Key</h2>
                <p>
                    Ключи (<span className="highlight">key</span>) помогают
                    React определять, какие элементы были изменены, добавлены
                    или удалены. Они необходимы, чтобы React мог корректно
                    сопоставлять элементы массива с течением времени.
                </p>
                <details open>
                    <summary>
                        Пример использования ключей с массивом чисел:
                    </summary>
                    <pre>
                        {`
        const numbers = [1, 2, 3, 4, 5];
        const listItems = numbers.map((number) => 
            <li key={number}>
                {number}
            </li>
        );
            `}
                    </pre>
                </details>
                <p>
                    Лучший способ выбрать ключ — это строка, которая явно
                    отличает элемент списка от его соседей. Обычно используется{" "}
                    <span className="highlight">ID</span> элемента. Если{" "}
                    <span className="highlight">ID</span> нет, можно
                    использовать библиотеку{" "}
                    <a
                        href="https://www.npmjs.com/package/uuid"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="list-link"
                    >
                        uuid
                    </a>
                    .
                </p>
                <details open>
                    <summary>
                        Пример с использованием ID в качестве ключей:
                    </summary>
                    <pre>
                        {`
        const todoItems = todos.map((todo) =>
            <li key={todo.id}>c
                {todo.text}
            </li>
        );
            `}
                    </pre>
                </details>
                <p>
                    <span className="highlight">key</span> механизм{" "}
                    <a
                        href="https://www.kramarenko.com.ua/post/what_is_reconciliation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="list-link"
                    >
                        reconciliation
                    </a>{" "}
                    сверяет компоненты попарно между текущим и новым{" "}
                    <span className="highlight">virtual DOM</span>. Это может
                    привести к большому количеству лишних перерисовок, что
                    замедляет работу приложения.
                </p>

                <p>
                    Добавляя <span className="highlight">key</span>, мы помогаем
                    механизму <span className="highlight">reconciliation</span>{" "}
                    оптимизировать процесс. Вместо попарного сравнения, он ищет
                    элементы с одинаковыми ключами, что уменьшает количество
                    перерисовок. В итоге обновляются только те элементы, которые
                    изменились или были добавлены.
                </p>
            </section>
            
        </>
    );
};
