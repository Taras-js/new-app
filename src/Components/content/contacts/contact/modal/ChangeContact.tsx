import * as React from 'react'
import {Box, Button, Modal, TextField, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {updateChangeContact} from "../../../../../Redux/action/contacts-action";

const ChangeContact = (props) => {
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
    const dispatch = useDispatch()
    function submitForm(e) {
        e.preventDefault()
        const changeContact:object = {
            first_name: e.target[0].value,
            last_name: e.target[1].value,
            email: e.target[2].value,
            id: props.id
        }
        const id:number = props.id
        handleClose()
        return dispatch(updateChangeContact(changeContact, id))

    }
    return (
        <div >
            <Button className={'button'} onClick={handleOpen} variant="contained">Редактировать контакт</Button>
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
                        Редактировать контакт
                    </Typography>
                    <form onSubmit={submitForm}
                    >
                        <TextField id="filled-basic"
                                   className='text_field'
                                   variant="filled"
                                   defaultValue={props.first_name}
                                   label="Имя"
                                   required/>
                        <TextField id="filled-basic"
                                   className='text_field'
                                   name={'last_name'}
                                   variant="filled"
                                   defaultValue={props.last_name}
                                   label="Фамилия"
                                   required/>
                        <TextField id="filled-basic"
                                   className='text_field'
                                   name={'email'}
                                   variant="filled"
                                   defaultValue={props.email}
                                   label="Email"
                                   required/>
                        <Button
                            type={'submit'}
                            className={'button'}  variant="contained" > Сохранить </Button>
                    </form>
                </Box>
            </Modal>
        </div>
    )
}
export  default ChangeContact;