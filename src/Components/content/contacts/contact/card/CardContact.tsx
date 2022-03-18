import * as React from 'react'
import {Button, Card} from "@mui/material";
import {useEffect} from "react";
import {removeUser, setUsers} from "../../../../../Redux/action/contacts-action";
import ChangeContact from "../modal/ChangeContact";
import '../contact.css'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../../Redux/store";

const CardContact = () => {
    const dispatch = useDispatch();
    useEffect(()=> {  dispatch (setUsers()) },[dispatch] )
    const users = useSelector((state: RootState) => state.contactsPage.filterUsers)

    return (
            <>
                    <div className={'wrapper-card'}>
                    {users.map(item => {
                            return (
                                <Card variant="outlined" className={'card-contact'}>
                                <h2>Контакт: {item.last_name}</h2>
                                <div ><img src={item.avatar} alt={'avatar user'} className={'avatar'}/></div>
                                    <div>Имя: <strong>{item.first_name}</strong></div>
                                <div>Фамилия: <strong>{item.last_name}</strong></div>
                                <div>Email: <strong>{item.email}</strong></div>
                                    <div>
                                        <ChangeContact
                                            id={item.id}
                                            email={item.email}
                                            first_name={item.first_name}
                                            last_name={item.last_name}
                                        />
                                    </div>
                                    <div>
                                    <Button className={'button'}
                                            variant="contained"
                                            onClick={()=>{
                                                const id = item.id
                                               dispatch(removeUser(id))
                                            }}>Удалить контакт</Button>
                                    </div>
                                </Card>

                                )
                        })}
                    </div>
            </>
    )
}
export default CardContact;