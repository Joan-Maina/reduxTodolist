import { ADDTODO, REMOVETODO } from "../types";

const initialState = {todos: []};

const addtodoReducer = (state = initialState, action) => {
    switch(action.type){
        case ADDTODO:
            return {
                ...state, 
                todos: [...state.todos, action.todo]
            }
        case REMOVETODO:
            return {
                ...state,
                todos: [...state.todos.filter(todo=>todo.id !== action.id)]
            }
        default:
            return state;
    }
}
export default addtodoReducer;