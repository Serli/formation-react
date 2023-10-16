/* eslint-disable react/prop-types */
import "./Todo.css";
import {Status} from "../../../Model/StatusEnum.js";
import {useState} from "react";

export const Todo = (props) => {

    // eslint-disable-next-line no-unused-vars
    const [ status,setStatus] = useState('');

    const handleStatusClick = () => {
        const status = props.todo.status === Status.todo ? Status.inProgress : Status.done
        props.todo.status = status;
        setStatus(status);
    }

    return (
        <div className="task">
            <div className="leftSide">
                <h3 className="title">{props.todo.title}</h3>
                <p className="description">{props.todo.description}</p>
            </div>
            <div className="rightSide">
                <p className="date">{props.todo.createdAt}</p>
                <p className="status" onClick={handleStatusClick}>{props.todo.status}</p>
            </div>
        </div>
    );
}
