// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

export const Login = () => {

    const [form, setForm] = useState({
        "email": "",
        "password": ""
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:4000/accounts/authenticate', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': "application/json"
            }
        }).then(y => y.json())
          .then(y => console.log(y))

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" onChange={handleChange} />
                <input type="password" name="password" onChange={handleChange} />
                <input type="submit" value="save" />
            </form>
        </div>
    )
}