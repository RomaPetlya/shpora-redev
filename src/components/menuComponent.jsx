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
        text: "Refs, Key, Fragment",
        path: "refKeyFragment",
    },
    {
        key: 8,
        text: "Memo, useCallback",
        path: "memoCallback",
    },
    {
        key: 15,
        text: "Context",
        path: "willbelater",
        //path: "context",
    },
    {
        key: 9,
        text: "Routes",
        path: "willbelater",
        //path: "routes",
    },
    {
        key: 10,
        text: "Forms",
        path: "willbelater",
        //path: "forms",
    },
    {
        key: 11,
        text: "Storages",
        path: "willbelater",
        //path: "storages",
    },
    {
        key: 12,
        text: "HOC",
        path: "willbelater",
        //path: "hoc",
    },
    {
        key: 13,
        text: "Create project",
        path: "willbelater",
        //path: "create",
    },
    {
        key: 14,
        text: "Deploy project",
        path: "willbelater",
        // path: "deploy",
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
