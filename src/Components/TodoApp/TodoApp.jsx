import { Component } from 'react';
import {TodoForm} from "../TodoForm/TodoForm.jsx";
import {TodoFilters} from "../TodoFilters/TodoFilters.jsx";
import {TodoStats} from "../TodoStats/TodoStats.jsx";
import {TodoList} from "../TodoList/TodoList.jsx";
import {todoDB} from "../../Model/TodoDB.js";
import "./TodoApp.css";
import {Status} from "../../Model/StatusEnum.js";

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

    constructor(props) {
        super(props);
        this.state = {
            todoList: todoDB,
            filteredTodoList: [],
            filter: { filterTodo:true, filterInProgress: true, filterDone: true, filterFromDate: '1990-01-01', filterToDate: '2090-12-31' }
        }
    }

    handleTodoSubmit = (todo) => {
        todo.id = getMyTodoAnId();
        todoDB.push(todo);
        this.setState({todoList : todoDB})
    }

    formatDate = (date) => {
       const fragDate = date.split("-");
       return fragDate[2]+ "/"+ fragDate[1] +"/" + fragDate[0];
    }

    handleFilterChange = (filter) => {
        this.setState({filteredTodoList: []}, () => {
            todoDB.forEach( (todo) => {
                if (this.formatDate(filter.filterFromDate) <= todo.createdAt
                    && todo.createdAt  <= this.formatDate(filter.filterToDate)) {
                    if ((filter.filterTodo && todo.status === Status.todo)
                        || (filter.filterInProgress && todo.status === Status.inProgress)
                        || (filter.filterDone && todo.status === Status.done)) {
                        this.state.filteredTodoList.push(todo);
                    }
                }
            });
            this.setState({todoList: this.state.filteredTodoList});
        });
    }

    render() {
        return (
            <div className="wrapper">
                <div className="todoForm">
                    <TodoForm onTodoSubmit={this.handleTodoSubmit}/>
                </div>
                <div className="todoFilters">
                    <TodoFilters onFilterChange={this.handleFilterChange} />
                </div>
                <div className="todoStats">
                    <TodoStats todoList={this.state.todoList}/>
                </div>
                <div className="todoList">
                    <TodoList todoList={this.state.todoList}/>
                </div>
            </div>
        );
    }
}
