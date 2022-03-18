import { combineReducers } from "redux";
import { authReducer } from "./auth-reducer";
import { contactsReducer } from "./contacts-reducer";
const rootReducer = combineReducers({
    authPage: authReducer,
    contactsPage: contactsReducer
})
export default rootReducer;