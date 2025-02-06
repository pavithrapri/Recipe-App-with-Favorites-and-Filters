import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { recipeReducer } from "./reducers";

const rootReducer = combineReducers({
  recipes: recipeReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
