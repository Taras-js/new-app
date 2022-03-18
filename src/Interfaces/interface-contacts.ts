export  interface ContactsState {
    users: Array<user>
    filterUsers: Array<user>
    totalCount: number
}
export interface user {

    id: number
    email: string
    first_name: string
    last_name: string
    avatar: string

}