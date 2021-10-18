import { createStore } from "redux";
import addtodoReducer from "./redux/reducers/addtodoReducer";

const store = createStore(addtodoReducer);

export default store;