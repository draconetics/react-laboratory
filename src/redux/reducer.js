import posts from '../data/posts';
import {combineReducers} from 'redux';

const commentReducer = function comments(state={},action){
    switch(action.type) {
        
        case 'ADD_COMMENT': 
            console.log(action.postId);
            if(!state[action.postId]){
                return {...state, [action.postId]:[action.comment]};
            }else{
                return {...state, [action.postId]: [...state[action.postId], action.comment]};
            }
            
        default: return state;
    }
}

const postReducer = function posts(state=posts, action) {
    //console.log(action.index);
    //remove photo
    switch(action.type){
        case 'REMOVE_POST': 
            console.log("delete !!!",action.index);
            return [...state.slice(0, action.index), ...state.slice(action.index+1)];
           // break;
        case 'ADD_POST': return  [...state,action.post];
           // break;
        default : return state;
    }
   // return state;
}

const rootReducer = combineReducers({postReducer, commentReducer});

export default rootReducer;