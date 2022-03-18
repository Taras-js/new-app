import * as types from "../types/types";
import {usersAPI} from "../../API/api";
import { AnyAction } from 'redux';
import { RootState } from '../store';
import { ThunkAction } from 'redux-thunk';

export const authAction = (email:string, password:string, date:string, dateForRegisterUser:object)
    : ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
    const response = await usersAPI.authorizationUser(email, password, date, dateForRegisterUser)
    dispatch({ type: types.AUTH_USER, payload: response })
}

