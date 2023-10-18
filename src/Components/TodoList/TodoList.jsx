import {Todo} from "./Todo/Todo.jsx";
import {useContext} from "react";
import {TodoListContext} from "../TodoHome/TodoHome.jsx";

export const TodoList = () => {
    const {todoList} = useContext(TodoListContext);
    return (
        <div>
            <h2>Liste des tâches</h2>
            <div className="mytodoList">
                {
                    // eslint-disable-next-line react/prop-types
                    todoList && todoList.map(todo => {
                        return (
                            <Todo key={todo.id} todo={todo}/>
                        );

                    })
                }
            </div>

        </div>
    );
}
