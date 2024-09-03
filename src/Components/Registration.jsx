// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

export const Registration = () => {

    const [form, setForm] = useState({
        title: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        language: [],
        gender: ""
    });

    const [erorr, setError] = useState({
        title: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        language: [],
        gender: ""
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)
    }

    const handleFormdata = (e) => {
        const [name, value, type] = e.target
        if (type == "checkbox") {
            setForm({ ...form, [name]: e.target.checked })
        }
        else {
            setForm({ ...form, [name]: value })
        }
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
        <div className="row justify-content-center pt-5">
            <div className="col-md-6">
                <form onSubmit={handleSubmit} className="p-4 border rounded">
                    <div className="mb-3">
                        <label htmlFor="dropdown" className="form-label">Title</label>
                        <select
                            id="dropdown"
                            name="title"
                            value={form.title}
                            onChange={handleFormdata}
                            className="form-select"
                        >
                            <option value="">Choose...</option>
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Miss">Miss</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input 
                            type="text" 
                            name="firstName" 
                            onChange={handleFormdata} 
                            className="form-control" 
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input 
                            type="text" 
                            name="lastName" 
                            onChange={handleFormdata} 
                            className="form-control" 
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            onChange={handleFormdata} 
                            className="form-control" 
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            onChange={handleFormdata} 
                            className="form-control" 
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input 
                            type="password" 
                            name="confirmPassword" 
                            onChange={handleFormdata} 
                            className="form-control" 
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Languages</label>
                        <div className="form-check">
                            <input 
                                type="checkbox" 
                                name="language" 
                                value="English" 
                                onChange={handleFormdata} 
                                className="form-check-input" 
                                id="languageEnglish"
                            />
                            <label className="form-check-label" htmlFor="languageEnglish">English</label>
                        </div>
                        <div className="form-check">
                            <input 
                                type="checkbox" 
                                name="language" 
                                value="Hindi" 
                                onChange={handleFormdata} 
                                className="form-check-input" 
                                id="languageHindi"
                            />
                            <label className="form-check-label" htmlFor="languageHindi">Hindi</label>
                        </div>
                        <div className="form-check">
                            <input 
                                type="checkbox" 
                                name="language" 
                                value="Gujarati" 
                                onChange={handleFormdata} 
                                className="form-check-input" 
                                id="languageGujarati"
                            />
                            <label className="form-check-label" htmlFor="languageGujarati">Gujarati</label>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Gender</label>
                        <div className="form-check">
                            <input 
                                type="radio" 
                                name="gender" 
                                value="male" 
                                onChange={handleFormdata} 
                                className="form-check-input" 
                                id="genderMale"
                            />
                            <label className="form-check-label" htmlFor="genderMale">Male</label>
                        </div>
                        <div className="form-check">
                            <input 
                                type="radio" 
                                name="gender" 
                                value="female" 
                                onChange={handleFormdata} 
                                className="form-check-input" 
                                id="genderFemale"
                            />
                            <label className="form-check-label" htmlFor="genderFemale">Female</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
            </div>
        </div>
    );
}
