/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export const Registration1 = () => {

    const [form, setform] = useState({
        firstName: "",
        lastName: "",
        MiddleName: "",
        Gender: "",
        IsActive: false

    });

    const [erorr, setError] = useState({
        firstName: "",
        lastName: "",
    })

    const handleSubmit = (e) => {

        e.preventDefault();
        let p = {};

        Object.keys(erorr).map((v) => {
            let message = validate(v, form[v]);
            p[v] = message;
        });
        setError({ ...p });
        console.log(form);
    }

    const handelChange = (e) => {
        if (e.target.type == "checkbox") {
            setform({ ...form, [e.target.name]: e.target.checked })
        }
        else {
            setform({ ...form, [e.target.name]: e.target.value })
        }
        let errormessage = validate(e.target.name, e.target.value);
        console.log(errormessage);
        setError({ ...erorr, [e.target.name]: errormessage })
        console.log(erorr);
    }

    const validate = (name, value) => {
        let error = '';
        switch (name) {
            case "firstName":
                if (!value) {
                    error = "please enter name"
                }
                break;

            case "lastName":
                if (!value) {
                    error = "please enter lastName"
                }
                break;
        }
        return error;
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name="firstName" onChange={handelChange} onBlur={handelChange} />
                <span>{erorr.firstName}</span>
                <input type='text' name="lastName" onChange={handelChange} />
                <span>{erorr.lastName}</span>
                <input type='checkbox' name="IsActive" onChange={handelChange} />
                Male <input type='radio' name='Gender' onChange={handelChange} value="male" />
                Female <input type='radio' name='Gender' onChange={handelChange} value="female" />
                <input type='submit' value="save" />
            </form>
        </div>
    )
}