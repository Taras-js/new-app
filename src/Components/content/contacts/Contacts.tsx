import * as React from 'react';
import Contact from "./contact/Contact";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {RootState} from "../../../Redux/store";
function Contacts () {
    const isAuth = useSelector((state: RootState) => state.authPage.isAuth);
    let navigate = useNavigate();
    return (
            <>
                {!isAuth
                    ?  navigate('/login')
                    : <Contact />
                }
            </>
    )
}
export default  Contacts;