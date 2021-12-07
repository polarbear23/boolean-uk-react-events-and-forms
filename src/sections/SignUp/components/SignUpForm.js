import React from 'react'
import { useState } from "react"
const SignUpForm = () => {
    const [signUpFormData, setSignUpFormData] = useState({
        firstName: "",
        email: "",
        password: "",
        terms: ""
    });

    function handleChange(event) {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        const inputType = event.target.type;

        if (inputName === "firstName") {
            setSignUpFormData({ ...signUpFormData, firstName: inputValue });
        }

        if (inputName === "email") {
            setSignUpFormData({ ...signUpFormData, email: inputValue });
        }

        if (inputName === "password") {
            setSignUpFormData({ ...signUpFormData, password: inputValue });
        }

        if (inputType === "checkbox" && inputName === "terms") {
            setSignUpFormData({ ...signUpFormData, terms: inputValue });
        }
    }

    function handleSubmit(event) {
        event.preventDefault()

        const userData = {
            firstName: signUpFormData.firstName,
            email: signUpFormData.email,
            password: signUpFormData.password
        }

        console.log({ userData })
    }

    return (
        <form class="form-stack" onSubmit={handleSubmit}>
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" value={signUpFormData.firstName} onChange={handleChange} />
            <label for="email">Email</label>
            <input type="email" id="email" name="email" value={signUpFormData.email} onChange={handleChange} />
            <label for="password">Password</label>
            <input type="password" id="password" name="password" value={signUpFormData.password} onChange={handleChange} />
            <div>
                <input type="checkbox" id="terms" name="terms" onChange={handleChange} />
                <label for="terms">I accept Terms and Conditons</label>
            </div>
            <button type="submit">Sign Up</button>
        </form>
    )
}

export default SignUpForm
