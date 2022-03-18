import * as React from "react";
import {Box, Button, TextField} from "@mui/material";
import './login.css'
import {useDispatch, useSelector} from "react-redux";
import {authAction} from "../../../Redux/action/auth-action";
import {useNavigate} from "react-router-dom";
import {RootState} from "../../../Redux/store";
export default function Login () {

const dispatch = useDispatch();
    function onRegister(event) {
        event.preventDefault()
        const dateForRegisterUser = {
            email: event.target[0].value,
            password: event.target[2].value
        }
        const date = JSON.stringify(dateForRegisterUser)
        const email:string = JSON.stringify(event.target[0].value);
        const password = JSON.stringify(event.target[2].value);
       return dispatch (authAction(email, password, date, dateForRegisterUser))

    }
    const isAuth = useSelector((state: RootState) => state.authPage.isAuth);
    let navigate = useNavigate();
    return (
        <>{
            isAuth
        ?  navigate('/contacts')
        : <div className={'login'}>
                    <Box onSubmit={onRegister} className={'form-control'} component={'form'} >
                        <h2>Здравствуйте гость</h2>
                        <p>Для просмотра списка <br/> контактов необходимо<br/> зарегистрироваться</p>
                        <TextField className={'input'} type="email" id="outlined-basic" label="введите email" variant="outlined" />
                        <TextField className={'input'} type="password" id="outlined-basic" label="введите пароль" variant="outlined" />
                        <Button className={'input'} type="submit" variant="contained" > Зарегистрироваться </Button>
                    </Box>
                </div>
        }
        </>
    )
}