import * as types from "../types/types";
import {usersAPI} from "../../API/api";
import { AnyAction } from 'redux';
import { RootState } from '../store';
import { ThunkAction } from 'redux-thunk';

export const setUsers = (): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
    const response = await usersAPI.getUsers()
    dispatch({ type: types.GET_USERS, payload: response })
}

export const removeUser = (id:number): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
    await usersAPI.deleteUser(id)
    dispatch({ type: types.DELETE_USER, payload: id})
}

export const updateChangeContact = (changeContact:object, id:number): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
    const response = await usersAPI.changeUser(changeContact, id)

    dispatch({ type: types.UPDATE_CHANGE_CONTACT, payload: response})
}

export const createNewContactAC = (newContact:object): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
    const response = await usersAPI.createUser(newContact)

    dispatch({type: types.CREATE_NEW_CONTACT, payload: response})
}

export const searchOnLastName = (input_last_name:string): ThunkAction<void, RootState, unknown, AnyAction> => dispatch => {
    dispatch({type: types.SEARCH_IN_LAST_NAME, payload: input_last_name.toLowerCase()})
}