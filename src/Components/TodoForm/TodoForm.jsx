import "./TodoForm.css";
import {useState} from "react";
import {Status} from "../../Model/StatusEnum.js";
import {todoDB} from "../../Model/TodoDB.js";

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
export const TodoForm = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const titleData = title.trim();
        const descriptionData = description.trim();
        const todo = {
            title: titleData,
            description: descriptionData,
            status: Status.todo,
            createdAt: new Date().toLocaleDateString('en-GB')
        }
        // eslint-disable-next-line react/prop-types
        handleTodoSubmit(todo);
        setTitle('');
        setDescription('');
    };
    const handleTodoSubmit = (todo) => {
        todo.id = getMyTodoAnId();
        todoDB.push(todo);
        //this.setState({todoList : todoDB})
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
