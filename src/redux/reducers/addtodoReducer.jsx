import { completed } from "../actions/addToDo";
import { ADDTODO, REMOVETODO, COMPLETED } from "../types";

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
                todos: [...state.todos.filter(({id}) => id !== action.id)]
            }      
        case COMPLETED:
                return{
                    ...state,
                    todos: state.todos.map(todo=> {
                        if(todo.id === action.id){
                            todo.completed = !todo.completed
                        }
                        return todo
                    })
                }
        default:
            return state;
    }
}
export default addtodoReducer;