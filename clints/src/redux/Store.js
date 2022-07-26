import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers/index";

const Store = createStore(reducer, composeWithDevTools());

export default Store;
