import * as React from 'react'
import {Box, Button, Modal, TextField, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {createNewContactAC} from "../../../../../Redux/action/contacts-action";
import {EventNewContact} from "../../../../../Interfaces/event";

const AddNewContact = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 320,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch();
    function submitForm(e) {
        e.preventDefault()
            const newContact:EventNewContact = {
                id: "",
                email: e.target[2].value,
                first_name: e.target[0].value,
                last_name: e.target[1].value,
                avatar: "https://reqres.in/img/faces/10-image.jpg",
            }
        handleClose()
        dispatch(createNewContactAC(newContact))

    }
    return (
        <div className={'button-newcontact'}>
            <Button className={'button-newcontact'} onClick={handleOpen} variant="contained">Добавить контакт</Button>
            <Modal
                className={'modal'}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={'box-modal'}
                     sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Создать новый контакт
                    </Typography>
                    <form onSubmit={submitForm}>
                        <TextField className='text_field' id="filled-basic" label="Имя" variant="filled" />
                        <TextField className='text_field' id="filled-basic" label="Фамилия" variant="filled" />
                        <TextField className='text_field' id="filled-basic" label="email" variant="filled" />
                        <Button className={'button'} type="submit" variant="contained" > Создать </Button>
                    </form>
                </Box>
            </Modal>
        </div>
    )
}
export  default AddNewContact;