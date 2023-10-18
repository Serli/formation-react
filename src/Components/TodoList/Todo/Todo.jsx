/* eslint-disable react/prop-types */
import "./Todo.css";
import {Status} from "../../../Model/StatusEnum.js";
import {useContext, useState} from "react";
import {TodoListContext} from "../../TodoHome/TodoHome.jsx";

export const Todo = (props) => {
    const {setTodoList} = useContext(TodoListContext);

    // eslint-disable-next-line no-unused-vars
    const [ status,setStatus] = useState('');

    const handleStatusClick = () => {
        const status = props.todo.status === Status.todo ? Status.inProgress : Status.done
        props.todo.status = status;
        setStatus(status);
        setTodoList();
    }

    return (
        <div className="task">
            <div className="leftSide">
                <h3 className="title">{props.todo.title}</h3>
                <p className="description">{props.todo.description}</p>
            </div>
            <div className="rightSide">
                <p className="date">{props.todo.createdAt}</p>
                <p className={props.todo.status === Status.todo ? "status-todo"  : props.todo.status === Status.inProgress ? "status-inProgress" : "status-done"} onClick={props.todo.status === Status.done ? null : handleStatusClick}>{props.todo.status}</p>
            </div>
        </div>
    );
}