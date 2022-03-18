import * as React from 'react'
import './contact.css'
import CardContact from "./card/CardContact";
import AddNewContact from "./modal/AddNewContact";
import SearchContact from "./search/SearchContact";
const Contact = () => {
    return (
        <>
            <AddNewContact/>
            <SearchContact />
            <CardContact/>
        </>
    )
}
export default Contact;