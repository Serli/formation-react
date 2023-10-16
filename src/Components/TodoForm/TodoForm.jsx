import "./TodoForm.css";
import {useState} from "react";
export const TodoForm = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const titleData = title.trim();
        const descriptionData = description.trim();
        // eslint-disable-next-line react/prop-types
        props.onMessageSubmit({ author: titleData, text: descriptionData });
        setTitle('');
        setDescription('');
    };

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
                <input type="text" id="title" className="formElement" name="title" placeholder="Titre" value={title} onChange={handleTitleChange}/>
                <br/>
                <textarea id="description" className="formElement" name="description" rows="12" cols="50" placeholder="Description" value={description} onChange={handleDescriptionChange}/>
                <br/>
                <p className="center">
                    <input className="buttonValidate" type="submit" value="Créer" />
                </p>
            </form>
        </div>
    );
}
