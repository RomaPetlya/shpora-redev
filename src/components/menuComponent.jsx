import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const items = [
    {
        key: 1,
        text: "VirtualDOM",
        path: "vdom",
    },
    {
        key: 2,
        text: "Components",
        path: "compts",
    },
    {
        key: 3,
        text: "Props",
        path: "props",
    },
    {
        key: 4,
        text: "State",
        path: "state",
    },
    {
        key: 5,
        text: "LifeCycle",
        path: "lcycle",
    },
    {
        key: 6,
        text: "Events",
        path: "events",
    },
    {
        key: 7,
        text: "Refs, key, Memo",
        path: "refKeyMemo",
    },
    {
        key: 8,
        text: "Context",
        path: "context",
    },
    {
        key: 9,
        text: "Routes",
        path: "routes",
    },
    {
        key: 10,
        text: "Forms",
        path: "forms",
    },
    {
        key: 11,
        text: "Storages",
        path: "storages",
    },
    {
        key: 12,
        text: "HOC",
        path: "hoc",
    },
    {
        key: 13,
        text: "Create project",
        path: "create",
    },
    {
        key: 14,
        text: "Deploy project",
        path: "deploy",
    }
];

const MenuLinks = () => {
    return (
        <div className="menu-learn">
            {items.map((item) => {
                return (
                    <NavLink
                        key={item.key}
                        to={item.path}
                        className="learn-item"
                    >
                        {item.text}
                    </NavLink>
                );
            })}
        </div>
    );
};

export default MenuLinks;
