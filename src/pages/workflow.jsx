import CreateTask from "../components/createTask";
import * as actionTypes from "../store/actionType"
import Todo from "../components/todo";
import { connect } from "react-redux";
function WorkFlow(props){
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
        addTask: task =>
        dispatch({ type: actionTypes.ADD_NEW_TASK, payload: { task } }),
        }
        }

    
export default connect(mapStateToProps,mapDispatchToProps)(WorkFlow);