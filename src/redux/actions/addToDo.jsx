import { ADDTODO, REMOVETODO } from "../types";

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