import React from "react";
import s from "../LeftBlock.module.css"
import { Link, useLocation } from "react-router-dom";

export const NavigationMenu = () => {
    const location = useLocation();
    
    return (
        <ul>
            <li><Link to={"/orders"} className={location.pathname === "/orders" ? s.selected : ""}>ПРИХОД</Link></li>
            <li><Link to={"/groups"} className={location.pathname === "/groups" ? s.selected : ""}>ГРУППЫ</Link></li>
            <li><Link to={"/products"} className={location.pathname === "/products" ? s.selected : ""}>ПРОДУКТЫ</Link></li>
            <li><Link to={"/users"} className={location.pathname === "/users" ? s.selected : ""}>ПОЛЬЗОВАТЕЛИ</Link></li>
            <li><Link to={"/settings"} className={location.pathname === "/settings" ? s.selected : ""}>НАСТРОЙКИ</Link></li>
        </ul>
    )
}