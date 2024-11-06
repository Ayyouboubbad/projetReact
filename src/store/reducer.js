import * as actionType from "./actionType";

const initState={
    todo : [{
        id:1,
        title:"Ajouter button de déconexion",
        description : "Le devloppeur doit ajouter button de déconexion sur navbar en rouge sur mobile et aussi sur desktop",
        dev:"Hamid aymen",
        createdAt:"2024/11/01 13:25",
        startedAt:null,
        doneAt:null
    },
    {
        id:2,
        title:"Ajouter button de déconexion",
        description : "Le devloppeur doit ajouter button de déconexion sur navbar en rouge sur mobile et aussi sur desktop",
        dev:"Hamid aymen",
        createdAt:"2024/11/01 13:25",
        startedAt:null,
        doneAt:null
    },
    {
        id:3,
        title:"Ajouter button de déconexion",
        description : "Le devloppeur doit ajouter button de déconexion sur navbar en rouge sur mobile et aussi sur desktop",
        dev:"Hamid aymen",
        createdAt:"2024/11/01 13:25",
        startedAt:null,
        doneAt:null
    }],
    progressing : [ {
        id:4,
        title:"Ajouter button de déconexion",
        description : "Le devloppeur doit ajouter button de déconexion sur navbar en rouge sur mobile et aussi sur desktop",
        dev:"Hamid aymen",
        createdAt:"2024/11/01 13:25",
        startedAt:"2024/11/01 16:25",
        doneAt:null
    }],
    done : [{
        id:5,
        title:"Ajouter button de déconexion",
        description : "Le devloppeur doit ajouter button de déconexion sur navbar en rouge sur mobile et aussi sur desktop",
        dev:"Hamid aymen",
        createdAt:"2024/11/01 13:25",
        startedAt:"2024/11/01 16:25",
        doneAt:"2024/11/02 16:25"
    }]
    }

    function reducer(state =initState, action ){
        console.log(action);
        switch(action.type){
            case actionType.ADD_NEW_TASK :
            return [...state.todo,action.payload.task]
            default :
            return state;
        }
      


       
    }

export default reducer