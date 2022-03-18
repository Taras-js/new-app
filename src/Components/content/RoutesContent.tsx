import  * as React from 'react'
import {Route, Routes} from "react-router-dom";
import Contacts from "./contacts/Contacts";
import Login from "./login/Login";
const RoutesContent = () => {
    return (
            <Routes>
                <Route path='/contacts' element={<Contacts />}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
    )
}
export default RoutesContent;