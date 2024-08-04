import React from "react";

export const HomeComponent = () => {
    return (
        <>  
            <h1>Cheat Sheet Redev</h1>
            <h3>HOME PAGE</h3>
            <p>
            <span className="highlight"># ТЗ. Шпора</span>  Реализовать приложение с меню, пунктами которого
                являются шаги в roadmap (3-17)
            </p>
            <p> <span className="highlight">Цель</span>: составить для себя
                шпору-приложение, что бы всегда можно было обратиться к уже
                используемому материалу и копировать конструкции.</p>
            <img className='home-img' src="src/assets/roadmap.jpeg" alt="" />
            <p>На каждую тему нужно реализовать свой роут с написанным функционалом по этой теме.</p>
        </>
    );
};
