import "./TodoApp.css";
import {Menu} from "../Menu/Menu.jsx";
import {Outlet} from "react-router-dom";

export const TodoApp = () => {
    return (
        <>
            <Menu />
            <div className="content-outlet">
                <Outlet />
            </div>
        </>
    );
}
