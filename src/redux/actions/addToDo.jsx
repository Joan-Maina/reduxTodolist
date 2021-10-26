import { ADDTODO, REMOVETODO, COMPLETED } from "../types";

export const addtodo = (todo) => {
    return {
        type: ADDTODO,
        todo
    }

}
export const removetodo = (id) => {
    return{
        type: REMOVETODO,
        id
    }
}
export const completed = (id) => {
    return{
        type: COMPLETED,
        id
    }
}