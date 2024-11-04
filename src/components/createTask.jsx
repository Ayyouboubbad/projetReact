import { useState } from "react";
import '../App.css';

function CreateTask(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dev, setDev] = useState('');

    const titleHandler = (e) => {
        setTitle(e.target.value);
    };
    const descriptionHandler = (e) => {
        setDescription(e.target.value);
    };
    const devHandler = (e) => {
        setDev(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addTask({
            title,
            description,
            dev,
            createdAt: new Date().toISOString(),
            startedAt: null,
            doneAt: null
        });
    };

    return (
        <>
        <h1>Ajouter une tâche</h1>
        <form className="form" onSubmit={handleSubmit}>
            <div className="input-form">
                <label className="label">Title</label>
                <input type="text" value={title} onChange={titleHandler} />
            </div>
            <div className="input-form">
                <label className="label">Description</label>
                <textarea value={description} onChange={descriptionHandler} />
            </div>
            <div className="input-form">
                <label className="label">Dev</label>
                <select value={dev} onChange={devHandler}>
                    <option value="">Select Developer</option>
                    <option value="Dev1">Dev1</option>
                    <option value="Dev2">Dev2</option>
                    <option value="Dev3">Dev3</option>
                    <option value="Dev4">Dev4</option>
                    <option value="Dev5">Dev5</option>
                </select>
            </div>
            <button type="submit" className="submit">Ajouter une tâche</button>
        </form>
        </>
    );
}

export default CreateTask;
