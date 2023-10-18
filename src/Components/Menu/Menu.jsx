import "./Menu.css";
import {NavLink} from "react-router-dom";
export const Menu = () => {

    return (
        <nav className="menu-todo">
            <span className="title-menu">Todo App</span>
            <NavLink to="/stats"
                     className={({ isActive }) => isActive ? "active" : "link-menu"}>
                Statistiques
            </NavLink>
            <NavLink to="/add-todo"
                     className={({ isActive }) => isActive ? "active" : "link-menu"}>
                Nouvelle tâche
            </NavLink>
            <NavLink to="/"
                     className={({ isActive }) => isActive ? "active" : "link-menu"}>
                Mes tâches
            </NavLink>
        </nav>
    );
}