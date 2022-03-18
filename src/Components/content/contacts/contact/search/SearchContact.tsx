import * as React from 'react'
import {Autocomplete, Stack, TextField} from "@mui/material";
import {searchOnLastName} from "../../../../../Redux/action/contacts-action";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../../Redux/store";

const SearchContact = () => {
    const dispatch = useDispatch();
    const users = useSelector((state: RootState) => state.contactsPage.filterUsers);
    const searchFirstName = (event) =>  {
        const input_last_name = event.target.value
        dispatch(searchOnLastName(input_last_name))
    }
    return (
        <Stack spacing={2} sx={{ width: 300, padding: 1 }} >
            <Autocomplete
                id="free-solo-demo"
                freeSolo

                options={users.map((option) => option.last_name )}
                renderInput={(params) => <TextField {...params}
                                                    onChange={searchFirstName}
                                                    onSelect={searchFirstName}
                                                    label="Поиск по фамилии" />}
            />
        </Stack>
    )

}

export default SearchContact;