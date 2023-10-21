import {BrowserRouter, Route, Routes} from "react-router-dom";
import {TodoApp} from "./Components/TodoApp/TodoApp.jsx";
import {TodoForm} from "./Components/TodoForm/TodoForm.jsx";
import {TodoStats} from "./Components/TodoStats/TodoStats.jsx";
// eslint-disable-next-line no-unused-vars
import React, {createContext, useReducer} from "react";
import {TodoHome} from "./Components/TodoHome/TodoHome.jsx";
import {reducer} from "./reducer.jsx";
import {todoDB} from "./Model/TodoDB.js";

export const TodoListContext = createContext([]);

export const Router = () => {
    const [state, dispatch] = useReducer(reducer,
        {
            todoList: todoDB,
            filterList:
                {
                    filterTodo: true,
                    filterInProgress: true,
                    filterDone: true,
                    filterFromDate:'1990-01-01',
                    filterToDate: '2090-12-31'
                }
        });
        return (
            <BrowserRouter>
                <TodoListContext.Provider value={state}>
                    <Routes>
                            <Route path="/" element={<TodoApp/>}>
                                <Route index element={<TodoHome dispatch={dispatch}/>}/>
                                <Route path="add-todo" element={<TodoForm dispatch={dispatch}/>}/>
                                <Route path="stats" element={<TodoStats/>}/>
                            </Route>
                    </Routes>
                </TodoListContext.Provider>
            </BrowserRouter>
        );
}