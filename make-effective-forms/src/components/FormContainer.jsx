import React from 'react'
import { useState } from 'react'
import InputWithLabel from './InputWithLabel'

const FormContainer = () => {

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const handleChange = (e) => {
        setUserData({...userData, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('User data from form:', userData)
    }



    return (
        <form onSubmit={handleSubmit}>
            <InputWithLabel id="firstName" label="First name" type="text" required={false} placeholder="ex. Michael" value={userData.firstName} onChange={handleChange}  />
            <InputWithLabel id="lastName" label="Last name" type="text" required={false} placeholder="ex. Plain" value={userData.lastName} onChange={handleChange} />
            <InputWithLabel id="email" label="Email" type="email" required={false} placeholder="ex. michael.plain@gmail.com" value={userData.email} onChange={handleChange} />

            <button type='submit' className="btn btn-primary">Submit</button>
        </form>
    )
}

export default FormContainer;

