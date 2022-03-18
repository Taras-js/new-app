import * as types from '../types/types'
import { AuthState } from "../../Interfaces/interface-auth";
import { AnyAction } from "redux";

const initialState: AuthState  = {
    isAuth: false
}
export const authReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case types.AUTH_USER:
            return {
                ...state,
                isAuth: true,
            }
        default:
            return state
    }
}