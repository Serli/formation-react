import { Component } from 'react';
import {TodoForm} from "../TodoForm/TodoForm.jsx";
import {TodoFilters} from "../TodoFilters/TodoFilters.jsx";
import {TodoStats} from "../TodoStats/TodoStats.jsx";
import {TodoList} from "../TodoList/TodoList.jsx";
import {todoDB} from "../../Model/TodoDB.js";
import "./TodoApp.css";

const getMyTodoAnId = () => {
    let newId = 1;
    if (todoDB.length > 1) {
        todoDB.sort(function (a, b) {
            return a.id - b.id;
        });
        newId = todoDB[length-1];
    } else if (todoDB.length === 1){
        newId = todoDB[0].id+1;
    }
    return newId;
}

export class TodoApp extends Component {

    handleTodoSubmit = (todo) => {
        todo.id = getMyTodoAnId();
        todoDB.push(todo);
        this.setState({todoList : todoDB})
    }

    constructor(props) {
        super(props);
        this.state = {
            todoList : todoDB
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className="todoForm">
                    <TodoForm onTodoSubmit={this.handleTodoSubmit}/>
                </div>
                <div className="todoFilters">
                    <TodoFilters />
                </div>
                <div className="todoStats">
                    <TodoStats />
                </div>
                <div className="todoList">
                    <TodoList todoList={this.state.todoList}/>
                </div>
            </div>
        );
    }
}
