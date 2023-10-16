import {Todo} from "./Todo/Todo.jsx";

export const TodoList = (props) => {
    return (
        <div>
            <h2>Liste des tâches</h2>
            <div className="mytodoList">
                {
                    // eslint-disable-next-line react/prop-types
                    props.todoList.map(todo => {
                        return (
                            <Todo key={todo.id} todo={todo}/>
                        );

                    })
                }
            </div>

        </div>
    );
}
