/* eslint-disable react/prop-types */
import "./Todo.css";

export const Todo = (props) => {
    return (
        <div className="task">
            <div className="leftSide">
                <h3 className="title">{props.todo.title}</h3>
                <p className="description">{props.todo.description}</p>
            </div>
            <div className="rightSide">
                <p className="date">{props.todo.createdAt}</p>
                <p className="status">{props.todo.status}</p>
            </div>
        </div>
    );
}
