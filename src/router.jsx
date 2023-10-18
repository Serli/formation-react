import {BrowserRouter, Route, Routes} from "react-router-dom";
import {TodoApp} from "./Components/TodoApp/TodoApp.jsx";
import {TodoForm} from "./Components/TodoForm/TodoForm.jsx";
import {TodoStats} from "./Components/TodoStats/TodoStats.jsx";
// eslint-disable-next-line no-unused-vars
import React from "react";
import {TodoHome} from "./Components/TodoHome/TodoHome.jsx";

export const Router = () => {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TodoApp/>}>
                        <Route index element={<TodoHome />}/>
                        <Route path="add-todo" element={<TodoForm/>}/>
                        <Route path="stats" element={<TodoStats/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        );
}