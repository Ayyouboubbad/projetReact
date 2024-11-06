import * as actionType from "./actionType";

const initState = {
    todo: [],
    progressing: [],
    done: []
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionType.ADD_NEW_TASK:
            return {
                ...state,
                todo: [...state.todo, { ...action.payload.task, id: Date.now() }] 
            };
        case actionType.MARK_AS_IN_PROGRESS:
            const taskToMove = state.todo.find(task => task.id === action.payload.id);
            return {
                ...state,
                todo: state.todo.filter(task => task.id !== action.payload.id),
                progressing: [...state.progressing, { ...taskToMove, startedAt: new Date().toISOString() }]
            };
        case actionType.MARK_AS_DONE:
            const taskDone = state.progressing.find(task => task.id === action.payload.id);
            return {
                ...state,
                progressing: state.progressing.filter(task => task.id !== action.payload.id),
                done: [...state.done, { ...taskDone, doneAt: new Date().toISOString() }]
            };
        default:
            return state;
    }
}

export default reducer;