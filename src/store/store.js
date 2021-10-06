import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootreducer from "./reducers";
import { setLocalStorage} from "@utils/localStorage";


const store = createStore(rootreducer,
    composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
    
    setLocalStorage('store', store.getState().favoritereducer);
    
});

export default store;