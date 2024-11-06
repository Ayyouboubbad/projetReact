import { useState } from "react";
<<<<<<< HEAD
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
=======

function CreateTask(props){
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [dev,setDev]=useState('');
    const titleHandler = (e) => {
        setTitle(e.target.value);
    } 
    const descriptionHandler = (e) => {
        setDescription(e.target.value);
    } 
    const devHandler = (e) => {
        setDev(e.target.value);
       
    } 


   let handlSubmit=(event) => {
        event.preventDefault();
        console.log(title,description,dev);
        props.addTask({
            id:8,
            title:title,
            description:description,
            dev:dev,
            createdAt:"2024/11/01 13:25",
            startedAt:null,
            doneAt:null    
        })
    }
    return (
    <>
    <h1>Ajouter une task</h1>
        <form onClick={handlSubmit} >
            <div className="input-form">
                <label>Title</label>
                <input onChange={titleHandler} type="text" name="title" value={title} />
            </div>
            <div className="input-form">
                <label>Description</label>
                <textarea onChange={descriptionHandler}  name="description" value={description} />
            </div>
            <div className="input-form">
                <label>Dev</label>
                <select onChange={devHandler}>
>>>>>>> bb54c37dbd527aa4b33ddcf8bbf9fdef9251f55e
                    <option value="Dev1">Dev1</option>
                    <option value="Dev2">Dev2</option>
                    <option value="Dev3">Dev3</option>
                    <option value="Dev4">Dev4</option>
                    <option value="Dev5">Dev5</option>
                </select>
            </div>
<<<<<<< HEAD
            <button type="submit" className="submit">Ajouter une tâche</button>
        </form>
        </>
    );
}

export default CreateTask;
=======


        <button type="submit">Ajouter une tache</button>
        </form>

        </>

    )
}
export default CreateTask;
>>>>>>> bb54c37dbd527aa4b33ddcf8bbf9fdef9251f55e
