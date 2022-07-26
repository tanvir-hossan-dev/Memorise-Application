import { combineReducers } from "redux";
import postReducers from "./Post";

const reducer = combineReducers({ postReducers });

export default reducer;
