import React from 'react'
import { useState } from 'react'
import InputWithLabel from './InputWithLabel'
import PhoneInputWithCountryCode from './PhoneInputWithCountryCode'
import ShippingMethodRadioGroup from './ShippingMethodRadioGroup'
import PaymentMethodRadioGroup from './PaymentMethodRadioGroup'
import CountryAutocompleteSelect from './CountryAutocompleteSelect'
import InvoiceFields from './InvoiceFields'

const FormContainer = () => {

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: {
            countryCode: '',
            number: ''
        },
        shippingMethod: '',
        paymentMethod: '',
        blikCode: '',
        country: '',
        street: '',
        zipCode: '',
        wantsInvoice: false,
        invoice: {
            vat_number: "",
            invoice_data: "",
        }
    })

    const handleChange = (e) => {
        setUserData({...userData, [e.target.id]: e.target.value})
    }

    
    const handlePhoneChange = (phoneData) => (
        setUserData({...userData, phone: phoneData})
    )

    const handleShippingChange = (value) => {
        setUserData( (prevState) => ({...prevState, shippingMethod: value}))
    }

    const handlePaymentChange = (value) => {
        setUserData((prev) => ({ ...prev, paymentMethod: value }))
    }
      
    const handleBlikCodeChange = (codeBLIK) => {
        setUserData((prev) => ({ ...prev, blikCode: codeBLIK }))
    }

    const handleCountryChange = (val) => {
        setUserData((prev) => ({ ...prev, country: val }))
    }
    
    const handleInvoiceToggle = (checked) => {
        setUserData((prev) => ({...prev, wantsInvoice: checked,}))
    }
      
    const handleInvoiceDataChange = (invoice) => {
        setUserData((prev) => ({...prev, invoice: invoice,}))
    }

    const handleStreetChange = (e) => {
        setUserData(prev => ({ ...prev, street: e.target.value }))
    }
      
    const handleZipCodeChange = (e) => {
        setUserData(prev => ({ ...prev, zipCode: e.target.value }))
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
            <PhoneInputWithCountryCode value={userData.phone} onChange={handlePhoneChange} />
            <InputWithLabel id="city" label="City" type="text" required={false} placeholder="ex. Warsaw" value={userData.city} onChange={handleChange} />
            <InputWithLabel id="street" label="Street" type="text" required={false} placeholder="ex. Warszawska 12" value={userData.street} onChange={handleStreetChange} />
            <InputWithLabel id="zipCode" label="Zip code" type="text" required={false} placeholder="ex. 00-000" value={userData.zipCode} onChange={handleZipCodeChange} />
            <CountryAutocompleteSelect value={userData.country} onChange={handleCountryChange} />
            <ShippingMethodRadioGroup value={userData.shippingMethod} onChange={handleShippingChange} />
            <PaymentMethodRadioGroup value={userData.paymentMethod} blikCode={userData.blikCode} onChange={handlePaymentChange} onBlikCodeChange={handleBlikCodeChange} />
            <InvoiceFields checked={userData.wantsInvoice} data={userData.invoice} onToggle={handleInvoiceToggle} onChange={handleInvoiceDataChange} />


            <button type='submit' className="btn btn-primary">Submit</button>

        </form>
    )
}

export default FormContainer;

