import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import tableContainerReducer from "./reducers/tableContainer-reducer";
import thunkMiddleware from "redux-thunk";


const reducers = combineReducers({
  topTable: tableContainerReducer
});


// Подключение расширения Redux DevTools в Google Chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;