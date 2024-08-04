import React from "react";

export const PropsComponent = () => {
    return (
        <>
            <h2>Props</h2>
            <h3>Что такое пропсы и зачем они нужны</h3>
            <p>
                Пропсы (сокращение от properties) - это данные, которые
                передаются в компоненты React для настройки их поведения и
                внешнего вида. Они позволяют передавать информацию из
                родительского компонента в дочерний компонент.
            </p>
            <p>
                Дочерний компонент может читать эти{" "}
                <span className="highlight">props</span> и использовать их,
                например, для вывода данных на экран или для изменения своего
                поведения.
            </p>
            <h3>Передача пропсов компонентам</h3>
            <p>
                Пропсы передаются в компоненты в виде атрибутов при их
                использовании в JSX. Например,{" "}
                <span className="highlight">
                    {'<ChildComponent message="Привет, Redev!" />'}
                </span>{" "}
                передает пропс <span className="highlight">message</span> со
                значением "Привет, Redev!" в компонент{" "}
                <span className="highlight">ChildComponent</span>.
            </p>
            <details open>
                <summary>
                    <span>Пример передачи пропса в React:</span>
                </summary>
                <pre>
                    {`
        const ParentComponent = () => {
        const message = "Привет, Redev!";
        return <ChildComponent message={message} />;
        }

        const ChildComponent = (props) => {
        return <div>{props.message}</div>;  //"Привет, Redev!"
        }
        `}
                </pre>
            </details>
            <h3>Доступ к пропсам внутри компонентов</h3>
            <p>
                В функциональных компонентах пропсы доступны как параметр
                функции компонента. Например,{" "}
                <span className="highlight">{"(props) => {...}"}</span>.
            </p>
            <details>
                <summary>
                    <span>Пример с функциональной компонентой:</span>
                </summary>
                <pre>
                    {`
        const ParentComponent = () => {
        const message = "Привет, Redev!";
        return <ChildComponent message={message} />;
        }

        const ChildComponent = (props) => {
        return <div>{props.message}</div>;
        }

        // деструктуризация, ведь props это обычный объект
        const ChildComponent = ({message}) => {
        return <div>{message}</div>;
        }
        `}
                </pre>
            </details>
            <p>
                В классовых компонентах пропсы доступны через this.props.
                Например, <span className="highlight">this.props.message</span>.
            </p>
            <details>
                <summary>
                    <span>Пример с классовой компонентой:</span>
                </summary>
                <pre>
                    {`
        //ParentComponent.js
        import ChildComponent from './ChildComponent';

        const ParentComponent2 = () => <div>parentComponent2</div>
        const obj = {name:'Pasha'}

        const ParentComponent = () => {
        return (
            <div>
                <ChildComponent 
                    name={'abc'} 
                    age={25} 
                    isMan={true} 
                    parentComponent2={ParentComponent2} 
                    object={obj}
                />
            </div>
        );
        }

        export default ParentComponent;
        `}
                </pre>
                <pre>
                    {`
        //ChildComponent.js
        import React from 'react'

        class ChildComponent extends React.Component{
        render(){
            return (
            <div>
                {this.props.name}
                {this.props.age}
                {this.props.isMan? "Man" : "Women"}
                {this.props.parentComponent2()}
                {this.props.object.name}
            </div>
            );
        }
        }

        export default ChildComponent
        `}
                </pre>
            </details>
            <p>
                <span className="highlight">Props</span> можно использовать для
                передачи любых данных, включая строки, числа, массивы, объекты и
                функции. Пропсы являются неизменяемыми (immutable), их нельзя
                изменять напрямую.
            </p>
            <p>
                Правильное использование пропсов способствует лучшей организации
                кода и разделению ответственности между компонентами.
            </p>
        </>
    );
};
