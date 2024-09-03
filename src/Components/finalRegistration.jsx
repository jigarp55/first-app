// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

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

    const [errors, setErrors] = useState({});

    const handleFormdata = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setForm((prevForm) => ({
                ...prevForm,
                language: checked
                    ? [...prevForm.language, value]
                    : prevForm.language.filter((lang) => lang !== value)
            }));
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const validate = () => {
        let errors = {};

        if (!form.title) errors.title = "Title is required";
        if (!form.firstName) errors.firstName = "First Name is required";
        if (!form.lastName) errors.lastName = "Last Name is required";
        if (!form.email) errors.email = "Email is required";
        if (!form.password) errors.password = "Password is required";
        if (!form.confirmPassword) errors.confirmPassword = "Confirm Password is required";
        if (!form.gender) errors.gender = "Gender is required";
        if (form.language.length === 0) errors.language = "At least one language should be selected";

        const namePattern = /^[A-Za-z]+$/;
        if (form.firstName && !namePattern.test(form.firstName)) {
            errors.firstName = "First Name should contain only alphabets";
        }
        if (form.lastName && !namePattern.test(form.lastName)) {
            errors.lastName = "Last Name should contain only alphabets";
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (form.email && !emailPattern.test(form.email)) {
            errors.email = "Enter a valid email address";
        }

        if (form.password && form.confirmPassword && form.password !== form.confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0; // Returns true if no errors
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log(form);
            alert("Form submitted successfully!");
        } else {
            alert("Please correct the errors in the form");
        }
    };

    return (
        <div className="row justify-content-center py-5">
            <div className="col-md-6">
                <form onSubmit={handleSubmit} className="p-4 border rounded">
                    <div className="mb-3">
                        <label htmlFor="dropdown" className="form-label">Title</label>
                        <select
                            id="dropdown"
                            name="title"
                            value={form.title}
                            onChange={handleFormdata}
                            className={`form-select ${errors.title ? 'is-invalid' : ''}`}
                        >
                            <option value="">Choose...</option>
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Miss">Miss</option>
                        </select>
                        {errors.title && <div className="invalid-feedback">{errors.title}</div>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input 
                            type="text" 
                            name="firstName" 
                            value={form.firstName}
                            onChange={handleFormdata} 
                            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} 
                        />
                        {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input 
                            type="text" 
                            name="lastName" 
                            value={form.lastName}
                            onChange={handleFormdata} 
                            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} 
                        />
                        {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={form.email}
                            onChange={handleFormdata} 
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            value={form.password}
                            onChange={handleFormdata} 
                            className={`form-control ${errors.password ? 'is-invalid' : ''}`} 
                        />
                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input 
                            type="password" 
                            name="confirmPassword" 
                            value={form.confirmPassword}
                            onChange={handleFormdata} 
                            className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} 
                        />
                        {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Languages</label>
                        <div className={`form-check ${errors.language ? 'is-invalid' : ''}`}>
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
                        {errors.language && <div className="invalid-feedback d-block">{errors.language}</div>}
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
                        {errors.gender && <div className="invalid-feedback d-block">{errors.gender}</div>}
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
            </div>
        </div>
    );
};
