import React from 'react'
import { useState, useEffect } from 'react'
import InputWithLabel from './InputWithLabel'
import PhoneInputWithCountryCode from './PhoneInputWithCountryCode'
import ShippingMethodRadioGroup from './ShippingMethodRadioGroup'
import PaymentMethodRadioGroup from './PaymentMethodRadioGroup'
import CountryAutocompleteSelect from './CountryAutocompleteSelect'
import InvoiceFields from './InvoiceFields'

const FormContainer = () => {

    const [clickCount, setClickCount] = useState(0);

    useEffect(() => {
        const handleClick = () => {
          setClickCount((prev) => prev + 1);
        };
      
        document.addEventListener('click', handleClick);
      }, []);
      

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
        },
        city: '',
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
        console.log("Clicks:", clickCount)
        setClickCount(0);
    }


    return (
        <form onSubmit={handleSubmit}>

            <fieldset className='mb-2'>
                <legend className='h4'>User data</legend>
                <div className='row'>
                    <div className='col-md-6'>
                        <InputWithLabel id="firstName" label="First name" type="text" placeholder="ex. Michael" required value={userData.firstName} onChange={handleChange} pattern="^[A-Za-z]{2,}$" title="It needs to have at least 2 characters."  />
                    </div>
                    <div className='col-md-6'>
                        <InputWithLabel id="lastName" label="Last name" type="text" required placeholder="ex. Plain" value={userData.lastName} onChange={handleChange} pattern="^[A-Za-z]{2,}$" title="It needs to have at least 2 characters." />
                    </div>
                </div>
                <InputWithLabel id="email" label="Email" type="email" required placeholder="ex. michael.plain@gmail.com" value={userData.email} onChange={handleChange}/>
            </fieldset>

            <fieldset className='mb-2'>
                <legend className='h4'>User address</legend>
                <InputWithLabel id="street" label="Street" type="text" required placeholder="ex. Warszawska 12" value={userData.street} onChange={handleStreetChange} pattern=".{3,}" title="Street name must have at least 3 characters." />
            
                <div className='row'>
                    <div className='col-md-4'>
                        <InputWithLabel id="zipCode" label="Zip code" type="text" required placeholder="ex. 00-000" value={userData.zipCode} onChange={handleZipCodeChange} pattern="^[0-9]{2}-[0-9]{3}$" title="Zip-code number must have 5 digits."/>
                    </div>
                    <div className='col-md-4'>
                        <InputWithLabel id="city" label="City" type="text" required placeholder="ex. Warsaw" value={userData.city} onChange={handleChange} pattern="^[A-Za-z]{3,}$" title="City name must have at least 3 characters."/>
                    </div>
                    <div className='col-md-4'>
                        <CountryAutocompleteSelect value={userData.country} onChange={handleCountryChange} />
                    </div>
                </div>
            </fieldset>

            <fieldset className='mb-2'>
                <legend className='h4'>Contact data</legend>
                <PhoneInputWithCountryCode value={userData.phone} required onChange={handlePhoneChange} pattern="^[0-9]{9}$" title="Phone number must consists of 9 digits."/>
            </fieldset>

            <fieldset className='mb-2'>
                <legend className='h4'>Shipping method</legend>
                <ShippingMethodRadioGroup value={userData.shippingMethod} onChange={handleShippingChange} />
            </fieldset>

            <fieldset className='mb-2'>
                <legend className='h4'>Payment method</legend>
                <PaymentMethodRadioGroup value={userData.paymentMethod} blikCode={userData.blikCode} onChange={handlePaymentChange} onBlikCodeChange={handleBlikCodeChange} />
            </fieldset>
                
            <fieldset className='mb-2'>
                <legend className='h4'>Invoice</legend>
                <InvoiceFields checked={userData.wantsInvoice} data={userData.invoice} onToggle={handleInvoiceToggle} onChange={handleInvoiceDataChange} />
            </fieldset>

            <button type='submit' className="btn btn-primary">Submit</button>

        </form>
    )
}

export default FormContainer;

