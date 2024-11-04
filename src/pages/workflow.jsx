import CreateTask from "../components/createTask";
import * as actionTypes from "../store/actionType"
import Todo from "../components/todo";
import { connect } from "react-redux";
function WorkFlow(props){
    var todosListStyle={border: "solid 2px #3B71CA",width:"100%",textAlign: "center",margin: "10px",borderRadius:"5px", textTransform:"capitalize", color:"#3B71CA"};
    const moveToProgress=(taskId)=>{
        props.markAsInProgress(taskId)
    }
    const moveToDone=(taskId)=>{
        props.markAsDone(taskId)
    }
    
    return (
        <>
         <CreateTask addTask={props.addTask} />
         <h1>Les Tâche à réaliser pour le PFE</h1>
        <div style={{ display: "flex",justifyContent: "space-evenly"}}>
            <div className="todo" style={todosListStyle}>
                <h3>Les tâche à faire</h3>
                {
                  props.todo.map((t)=> <Todo key={t.id} task={t} status="todo" moveToProgress={moveToProgress}/>)
                }
            </div>
            <div className="progressing" style={todosListStyle}>
            <h3>Les tâches en cours de réalisation</h3>
                {
                    props.progressing.map((t)=> <Todo task={t} status="progressing" moveToDone={moveToDone}/>)
                }
            </div>
            <div className="done" style={todosListStyle}>
            <h3>Les tâches réalisé</h3>
                {
                    props.done.map((t)=> <Todo task={t} status="done"/>)
                }
            </div>
        </div>
         
        
        
        
        </>
    )
    
    
   
}
const mapStateToProps = state => {
    return {
    todo: state.todo,
    progressing: state.progressing,
    done:state.done
    }
    }

    const mapDispatchToProps = dispatch => {
        return {
            addTask: task => dispatch({ type: actionTypes.ADD_NEW_TASK, payload: { task } }),
            markAsInProgress: id => dispatch({ type: actionTypes.MARK_AS_IN_PROGRESS, payload: { id } }),
            markAsDone: id => dispatch({ type: actionTypes.MARK_AS_DONE, payload: { id } }),
        };
    };
    

    
export default connect(mapStateToProps,mapDispatchToProps)(WorkFlow);