import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './redusers';

const initialState = {

};
const middleware = [thunk];
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export default store;