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
export default Todo;
