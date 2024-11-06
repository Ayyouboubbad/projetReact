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

export default Todo;