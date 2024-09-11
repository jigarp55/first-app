/* eslint-disable no-unused-vars */
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

export default function HForm(props) {
    const { data, setData, open, closeDialor, id, setId } = props;

    const [form, setform] = useState({

        firstName: "",
        lastName: ""
    });

    useEffect(() => {

        if (id > 0) {
            let fo = data.find((v) => {

                return v.id == id;
            });
            setform({ ...fo });
        }
        else {
            setform({ firstName: "", lastName: "" })
        }

    }, [id, open])

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const handleSave = () => {
        let p = [...data];

        if (id > 0) {
            let d = p.find((j) => {
                return j.id == id;
            });
            d.firstName = form.firstName;
            d.lastName = form.lastName;
        }
        else {
            p.push({ ...form, id: p.length + 1 });
        }
        setData(p)
        setId(0)
        props.closeDialor();



    }
    return (
        <div>
            <Dialog open={open} onClose={closeDialor}>
                <DialogTitle>Add Employee</DialogTitle>
                <DialogContent>

                    <TextField name="firstName" onChange={handleChange} value={form.firstName}></TextField>

                    <TextField name="lastName" onChange={handleChange} value={form.lastName}></TextField>

                </DialogContent>
                <DialogActions>

                    <Button onClick={closeDialor}>Cancell</Button>
                    <Button onClick={handleSave}>SaveInfo</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}