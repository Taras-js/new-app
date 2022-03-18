import * as types from '../types/types'
import { ContactsState } from "../../Interfaces/interface-contacts";
import { AnyAction } from "redux";

const initialState: ContactsState  = {
    users: [],
    filterUsers: [],
    totalCount: 0
}
export const contactsReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case types.GET_USERS:
            return {
                ...state,
                users: action.payload,
                filterUsers: action.payload,
                totalCount: action.payload.length
            }
        case types.DELETE_USER:
            return {
                ...state,
                users: [...state.users.filter(item => item.id !== action.payload)],
                filterUsers: [...state.filterUsers.filter(item => item.id !== action.payload)]
            }
        case types.UPDATE_CHANGE_CONTACT:
            return {
                ...state,
                filterUsers: [...state.filterUsers.map(user => user.id === action.payload.id
                    ? {...user,
                        first_name: action.payload.first_name,
                        last_name: action.payload.last_name,
                        email: action.payload.email
                }
                    : user)],
            }

        case types.CREATE_NEW_CONTACT:
            return {
                ...state,
                users: [...state.users, action.payload],
                filterUsers: [...state.filterUsers, action.payload],
                totalCount: state.users.length + 1,

            }
        case types.SEARCH_IN_LAST_NAME:
            console.log(action.payload, state.users)
            return {
                ...state,
                filterUsers:
                    [...state.users.filter((user) =>
                            user.last_name.toLowerCase().includes(action.payload))
                    ]
            }

        default:
            return state
    }

}