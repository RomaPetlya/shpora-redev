export const MemoCallback = () => {
    return (
        <>
            <section>
                <h2>React.memo</h2>
                <p>
                    <span className="highlight">React.memo</span> — это функция
                    высшего порядка (Higher Order Component) в библиотеке React,
                    которая оптимизирует производительность функциональных
                    компонентов. Она предотвращает ненужные повторные рендеры,
                    когда пропсы и состояние не изменились.
                </p>
                <p>
                    По умолчанию, при каждом изменении состояния или пропсов,
                    компонент перерисовывается, даже если его визуальный вывод
                    остается тем же. Это может быть неэффективно для
                    компонентов, которые не зависят от изменений данных и
                    отображают одинаковый результат.
                </p>
                <p>
                    <span className="highlight">React.memo</span> использует
                    мемоизацию, чтобы "запомнить" предыдущий результат рендера
                    компонента и сравнить его с текущими пропсами. Если пропсы
                    не изменились, <span className="highlight">React.memo</span>{" "}
                    предотвращает повторный рендер, возвращая сохраненный
                    результат.
                </p>

                <details open>
                    <summary>Пример использования React.memo:</summary>
                    <pre>
                        {`
        import React from 'react';

        const MyComponent = React.memo((props) => {
        return (
            <div>
            {props.text}
            </div>
        );
        });
            `}
                    </pre>
                </details>

                <p>
                    <span className="highlight">React.memo</span> также
                    поддерживает второй необязательный аргумент —{" "}
                    <span className="highlight">compareFunction</span>, которая
                    позволяет контролировать, какие пропсы считать "равными".
                    Если функция не указана, используется поверхностное
                    сравнение (shallow comparison) для сравнения пропсов.
                </p>

                <details open>
                    <summary>Пример с использованием compareFunction:</summary>
                    <pre>
                        {`
        import React from 'react';

        const MyComponent = React.memo((props) => {
        return (
            <div>
            {props.text}
            </div>
        );
        }, (prevProps, nextProps) => {
        // Возвращает true, если пропсы равны и компонент не должен ререндериться
        return prevProps.text === nextProps.text;
        });
            `}
                    </pre>
                </details>

                <p>
                    Использование <span className="highlight">React.memo</span>{" "}
                    позволяет сократить количество ререндеров и повысить
                    производительность, особенно для компонентов, работающих с
                    большим объемом данных или сложными вычислениями.
                </p>
            </section>
            <section>
                <h2>useMemo</h2>
                <p>
                    React хук <span className="highlight">useMemo</span>{" "}
                    используется для{" "}
                    <strong>
                        мемоизации вычислений в функциональных компонентах
                    </strong>
                    . Он позволяет сохранять результат сложных вычислений и
                    повторно использовать его, если зависимости не изменились.
                    Это особенно полезно для оптимизации производительности,
                    когда вычисления могут занимать много ресурсов.
                </p>

                <details open>
                    <summary>Мемоизация ресурсоемкой функции:</summary>

                    <pre>
                        {`
        import React, { useMemo } from 'react';

        const MyComponent = ({ data }) => {
        const processedData = useMemo(() => {
            // Вычисления, требующие много времени или ресурсов
            return processData(data);
        }, [data]);

        return (
            <div>
            {processedData}
            </div>
        );
        };
        `}
                    </pre>
                </details>
                <p>
                    В этом примере результат работы функции{" "}
                    <span className="highlight">processData</span> будет
                    запоминаться и пересчитываться только при изменении пропса{" "}
                    <span className="highlight">data</span>. Это предотвращает
                    повторные вычисления при каждом рендере, что повышает
                    производительность.
                </p>

                <details open>
                    <summary>Мемоизация ресурсоемкой функции:</summary>
                    <pre>
                        {`
        import React, { useMemo } from 'react';

        const ExpensiveComponent = ({ propA, propB }) => {
        // Компонент, требующий много ресурсов
        return (
            // ...
        );
        };

        const MyComponent = ({ propA, propB }) => {
        const cachedComponent = useMemo(() => {
            // Компонент пересоздается только при изменении propA или propB
            return <ExpensiveComponent propA={propA} propB={propB} />;
        }, [propA, propB]);

        return (
            <div>
            {cachedComponent}
            </div>
        );
        };
        `}
                    </pre>
                </details>
                <p>
                    В данном примере компонент{" "}
                    <span className="highlight">ExpensiveComponent</span> будет
                    пересоздаваться только тогда, когда пропсы{" "}
                    <span className="highlight">propA</span> или{" "}
                    <span className="highlight">propB</span> изменяются. Если
                    они остаются неизменными, то будет использоваться
                    кэшированный компонент, что уменьшает нагрузку на рендеринг.
                </p>
            </section>
            <section>
                <h2>useCallback</h2>
                <ol className="list">
                    <li className="list-text">
                        <span className="highlight">Callback</span>-функция: Это
                        функция, которую мы хотим мемоизировать. Когда этот
                        сallback вызывается,{" "}
                        <span className="highlight">useCallback</span>{" "}
                        возвращает эту же функцию, если зависимости не
                        изменились.
                    </li>
                    <li className="list-text">
                        <span className="highlight">Массив зависимостей:</span>{" "}
                        Это массив значений, от которых зависит
                        сallback-функция. Если хотя бы одно из значений в
                        массиве изменится, хук{" "}
                        <span className="highlight">useCallback</span> вернет
                        новую мемоизированную версию колбэка. Если массив
                        пустой, то колбэк будет создан только один раз, при
                        первом рендере компонента.
                    </li>
                </ol>
                <p>
                    Вот пример использования{" "}
                    <span className="highlight">useCallback</span> с обоими
                    параметрами:
                </p>
                <details open>
                    <summary>useCallback</summary>
                    <pre>
                        {`
        const memoizedCallback = useCallback(
            () => doSomething(a, b),
            [a, b],
        );

`}
                    </pre>
                </details>
                <p>
                    В этом примере{" "}
                    <span className="highlight">useCallback</span> создает
                    мемоизированную версию функции{" "}
                    <span className="highlight">doSomething</span>, и эта версия
                    будет обновляться только в случае изменения значений{" "}
                    <span className="highlight">a</span> или{" "}
                    <span className="highlight">b</span>. Если{" "}
                    <span className="highlight">a</span> и{" "}
                    <span className="highlight">b</span> не изменятся между
                    рендерами компонента, то{" "}
                    <span className="highlight">useCallback</span> вернет ту же
                    самую мемоизированную функцию.
                </p>
            </section>
        </>
    )
}