<<<<<<< HEAD
function Todo(props) {
    return (
        <div className="task-container">
            <h2>{props.task.title}</h2>
            <p>{props.task.description}</p>
            <h3>{props.task.dev}</h3>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div>
                    <strong>Créé à:</strong> {new Date(props.task.createdAt).toLocaleString()}
                </div>
                {props.task.startedAt && (
                    <div>
                        <strong>Démarré à:</strong> {new Date(props.task.startedAt).toLocaleString()}
                    </div>
                )}
                {props.task.doneAt && (
                    <div>
                        <strong>Terminé à:</strong> {new Date(props.task.doneAt).toLocaleString()}
                    </div>
                )}
            </div>
            <div>
                {props.status === "todo" && (
                    <button onClick={() => props.moveToProgress(props.task.id)}>Démarrer</button>
                )}
                {props.status === "progressing" && (
                    <button onClick={() => props.moveToDone(props.task.id)}>Terminer</button>
                )}
            </div>
        </div>
    );
}

=======
function Todo(props){
    return (
        <div className="taks-container" style={{backgroundColor: "#ff97ab",
            margin: "16px",
            padding: "5px",
            borderRadius: "7px"}}>
            <h2>{props.task.title}</h2>
            <p>{props.task.description}</p>
            <h3>{props.task.dev}</h3>
            <div style={{ display: "flex",justifyContent: "space-between"}}>
                <div>{props.task.createdAt}</div> 
                <div>{props.task.startedAt} </div> 
                <div>{props.task.done}</div> 
            </div>
        </div>
    )
}
>>>>>>> bb54c37dbd527aa4b33ddcf8bbf9fdef9251f55e
export default Todo;
