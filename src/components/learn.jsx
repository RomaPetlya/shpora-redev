import React from "react";
import { Outlet } from "react-router-dom";
import MenuLinks from "./menuComponent";


export const LearnComponent = () => {
    return (
        <div className="learn-page">
            <MenuLinks/>
            <div className="learn-theory">
                <Outlet />
            </div>
        </div>
    );
};
