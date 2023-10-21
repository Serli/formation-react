import {TodoList} from "../TodoList/TodoList.jsx";
import {TodoFilters} from "../TodoFilters/TodoFilters.jsx";
// eslint-disable-next-line no-unused-vars
import React, {useReducer} from "react";

// eslint-disable-next-line react/prop-types
export const TodoHome = ({dispatch}) => {
    return (
        <>
            <TodoFilters dispatch={dispatch}/>
            <TodoList />
        </>
    );
}