import CreateTask from "../components/createTask";
import * as actionTypes from "../store/actionType"
import Todo from "../components/todo";
import { connect } from "react-redux";
function WorkFlow(props){
<<<<<<< HEAD
    var todosListStyle={border: "solid 2px #58bc82",width:"100%",textAlign: "center",margin: "10px",borderRadius:"5px", textTransform:"capitalize", color:"#58bc82"};
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
=======
    console.log(props);
    var todosListStyle={border: "solid 1px #777", width: "100%",textAlign: "center",margin: "10px"}
    return (
        <>
         <CreateTask addTask={props.addTask} />
         <h1>Les Tache a realiser pour le PFE</h1>
        <div style={{ display: "flex",justifyContent: "space-between"}}>
            <div className="Todo" style={todosListStyle}>
                <h3>Les tache a fair</h3>

                {
                
                  props.todo.map((t)=> <Todo task={t}></Todo>)
                }
            </div>
            <div className="progressing" style={todosListStyle}>
            <h3>Les taches en cours de realisation</h3>

                {
                    props.progressing.map((t)=> <Todo task={t}></Todo>)
                }
            </div>
            <div className="done" style={todosListStyle}>
            <h3>Les taches realisé</h3>
           

                {
                    props.done.map((t)=> <Todo task={t}></Todo>)
>>>>>>> bb54c37dbd527aa4b33ddcf8bbf9fdef9251f55e
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
<<<<<<< HEAD
            addTask: task => dispatch({ type: actionTypes.ADD_NEW_TASK, payload: { task } }),
            markAsInProgress: id => dispatch({ type: actionTypes.MARK_AS_IN_PROGRESS, payload: { id } }),
            markAsDone: id => dispatch({ type: actionTypes.MARK_AS_DONE, payload: { id } }),
        };
    };
    
=======
        addTask: task =>
        dispatch({ type: actionTypes.ADD_NEW_TASK, payload: { task } }),
        }
        }
>>>>>>> bb54c37dbd527aa4b33ddcf8bbf9fdef9251f55e

    
export default connect(mapStateToProps,mapDispatchToProps)(WorkFlow);