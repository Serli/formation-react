import "./TodoForm.css";
import {useContext, useState} from "react";
import {Status} from "../../Model/StatusEnum.js";
import {TodoListContext} from "../../router.jsx";
import {useNavigate} from "react-router-dom";

const getMyTodoAnId = (todoList) => {
    let newId = 1;
    if (todoList.length > 1) {
        todoList.sort(function (a, b) {
            return b.id - a.id;
        });
        newId = todoList[0].id+1;
    } else if (todoList.length === 1){
        newId = todoList[0].id+1;
    }
    return newId;
}
// eslint-disable-next-line react/prop-types
export const TodoForm = ({dispatch}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const state = useContext(TodoListContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const titleData = title.trim();
        const descriptionData = description.trim();
        const todo = {
            id: getMyTodoAnId(state.todoList),
            title: titleData,
            description: descriptionData,
            status: Status.todo,
            createdAt: new Date().toLocaleDateString('en-GB')
        }
        // eslint-disable-next-line react/prop-types
        handleTodoSubmit(todo);
        setTitle('');
        setDescription('');
        navigate("/");
    };
    const handleTodoSubmit = (todo) => {
        dispatch({ type: 'add-todo', todo: todo});
    }
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }


    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    return (
        <div>
            <h2>Nouvelle tâche</h2>
            <form onSubmit={handleSubmit}>
                <p className="center">
                    <input type="text" id="title" className="formElement" name="title" placeholder="Titre" value={title} onChange={handleTitleChange}/>
                </p>
                <p className="center">
                    <textarea id="description" className="formElement" name="description" rows="12" cols="50" placeholder="Description" value={description} onChange={handleDescriptionChange}/>
                </p>
                <p className="center">
                    <input className="buttonValidate" type="submit" value="Créer" />
                </p>
            </form>
        </div>
    );
}
