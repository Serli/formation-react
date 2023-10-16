import { Component } from 'react';
import {TodoForm} from "../TodoForm/TodoForm.jsx";
import {TodoFilters} from "../TodoFilters/TodoFilters.jsx";
import {TodoStats} from "../TodoStats/TodoStats.jsx";
import {TodoList} from "../TodoList/TodoList.jsx";
import "./TodoApp.css";


export class TodoApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wrapper">
                <div className="todoForm">
                    <TodoForm />
                </div>
                <div className="todoFilters">
                    <TodoFilters />
                </div>
                <div className="todoStats">
                    <TodoStats />
                </div>
                <div className="todoList">
                    <TodoList />
                </div>
            </div>
        );
    }
}
