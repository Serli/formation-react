import {TodoList} from "../TodoList/TodoList.jsx";
import {TodoFilters} from "../TodoFilters/TodoFilters.jsx";
// eslint-disable-next-line no-unused-vars
import React, {createContext, useReducer} from "react";
import {todoDB} from "../../Model/TodoDB.js";
import {reducer} from "../../reducer.jsx";

export const TodoListContext = createContext([]);

/*const handleFilterChange = (filter) => {
    todolist = todoDB.filter((todo) => {
        const betweenDate = formatDate(filter.filterFromDate) <= todo.createdAt
            && todo.createdAt  <= formatDate(filter.filterToDate);
        const statusOk = (filter.filterTodo && todo.status === Status.todo)
            || (filter.filterInProgress && todo.status === Status.inProgress)
            || (filter.filterDone && todo.status === Status.done);
        return betweenDate && statusOk;
    });
    setTodoList(todolist);
}*/

export const TodoHome = () => {
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
            <TodoListContext.Provider value={state}>
                <TodoFilters dispatch={dispatch}/>
                <TodoList />
            </TodoListContext.Provider>
    );
}