import React, { useState } from 'react'
import DisplayGrid from './DisplayGrid'
import HForm from './HForm'
import { Button } from '@mui/material'

export default function CRUD() {

    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);
    const [id, setId] = useState(0);

    const removeArray = (id) => {

        let myarray = [...data];

        let filterData = myarray.filter((v) => {

            return v.id != id;
        });

        setData(filterData);

    }

    const openDialog = () => {
        setOpen(true)
    }

    const editRow = (idd) => {

        setId(idd);
        openDialog();
    }

    const closeDialor = () => {
        setOpen(false)
    }
    return (
        <div>
            <Button onClick={openDialog}>Add Employee</Button>

            <DisplayGrid
                data={data}
                removeArray={removeArray}
                editRow={editRow}
            />
            <HForm open={open} closeDialor={closeDialor}
                data={data}
                setData={setData}
                id={id}
                setId={setId}
            />
        </div>
    )
}