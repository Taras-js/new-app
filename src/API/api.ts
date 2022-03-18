import axios from "axios";

const templates = axios.create({
        baseURL: 'https://reqres.in/api/'
    }
);
export const usersAPI = {
    getUsers() { return templates.get(`users?page=1`)
            .then(response => {
                return response.data.data
        });
    },
    deleteUser(id: number) {return templates.post(`users/${id}`)
            .then(response => {
                return response.data.data
        })
    },
    changeUser(changeContact: object, id:number) {
        return templates.patch(`users/${id}`, {changeContact})
            .then(response => {
                return response.data.changeContact
            })
    },
    createUser(newContact: object) {
        return templates.post('users', {newContact})
            .then(response => {
                // newContact.id = response.data.id
                return response.data.newContact
            })
    },
    authorizationUser(email:string, password:string, date:string, dateForRegisterUser:object) {
        return templates.post('register',
            {"email": "eve.holt@reqres.in",
                "password": "cityslicka"}
        )
            .then(response => {
                return response.data
            })
    },
}
